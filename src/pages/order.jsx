import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
function Order() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="ml-72 mt-24">
      <Breadcrumbs underline="active" size="lg">
        <BreadcrumbItem key="home">
          <Link to="/menu">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem key="order">Order</BreadcrumbItem>
      </Breadcrumbs>

      <div className="min-h-[calc(100vh-150px)] flex items-center justify-center">
        <Button className="m-2 bg-[#3F2F5D] text-white font-semibold" onClick={onOpen}>Place an order</Button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Order placed successfully
              </ModalHeader>
              <ModalBody>
                You&apos;r payment was successfully processed. Your order number
                is #123456
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Okay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Order;
