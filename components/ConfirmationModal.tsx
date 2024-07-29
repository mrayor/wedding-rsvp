"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";

import revalidate from "@/app/actions";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  state: "approve" | "reject";
  id: string;
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  state,
  id,
}: IProps) {
  const cookies = parseCookies();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onConfirm = async () => {
    try {
      if (!cookies["scan-access"]) return;

      setLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          status: state === "approve" ? "active" : "denied",
        }),
      });
      revalidate();
      onClose();
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {state === "approve" ? "Approve" : "Reject"} guest?
            </ModalHeader>
            <ModalBody>
              <p>Are you sure you want to {state} this guest?</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color={state === "reject" ? "danger" : "primary"}
                isLoading={loading}
                onPress={onConfirm}
              >
                {state === "approve" ? "Approve" : "Reject"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
