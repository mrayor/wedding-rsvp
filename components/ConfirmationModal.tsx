"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  state: "approve" | "reject";
}

export default function ConfirmationModal({ isOpen, onClose, state }: IProps) {
  const onConfirm = async () => {
    try {
      console.log("Confirmed", state);
      onClose();
    } catch (error) {
      return error;
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
