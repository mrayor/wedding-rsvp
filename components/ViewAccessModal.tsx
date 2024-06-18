import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";

interface IProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewAccessModal({ id, isOpen, onClose }: IProps) {
  console.log(id);

  return (
    <Modal backdrop="blur" isOpen={isOpen} size="md" onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Access Card
            </ModalHeader>
            <ModalBody>
              <section className="flex flex-col space-y-3">
                <Image
                  alt="logo"
                  className="py-2.5"
                  height={50}
                  src="/next.svg"
                  width={80}
                />
                <div className="flex flex-col py-4">
                  <p className="text-4xl font-bold">Olubunmi & Ayokunle</p>
                  <small>#OAsisOfLove &apos;24</small>
                </div>
                <div className="flex justify-between space-x-4">
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">Time</p>
                    <p className="text-base font-bold">1:00 PM</p>
                  </div>
                </div>
                <Divider className="my-2" />
                <div className="flex justify-between space-x-4">
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">Guest Name</p>
                    <p className="text-base font-bold">John Doe</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">Table Number</p>
                    <p className="text-base font-bold">54</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center py-2">
                    <Image
                      alt="qr-code"
                      height={200}
                      src="/qr.svg"
                      width={200}
                    />
                  </div>
                </div>
                <small className="text-center">
                  This access card admits one
                </small>
              </section>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
