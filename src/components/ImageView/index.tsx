import React, { Dispatch, Fragment, SetStateAction, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export interface TypeImageStatus {
  isShow: boolean;
  picture: string;
}

interface TypeImageViewProps {
  imageStatus: TypeImageStatus;
  onImageStatus: Dispatch<SetStateAction<TypeImageStatus>>;
}

const ImageView: React.FC<TypeImageViewProps> = ({
  imageStatus,
  onImageStatus,
}) => {

  const cancelButtonRef = useRef(null);

  return (
    <Transition show={imageStatus.isShow} as={Fragment}>
      <Dialog onClose={() => onImageStatus({ isShow: false, picture: "" })}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Dialog.Panel className="relative mx-auto max-w-3xl overflow-hidden rounded-lg bg-white">
              <div
                className="flex absolute top-1 right-1 h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg cursor-pointer bg-neutral-400 hover:bg-neutral-500"
                onClick={() => onImageStatus({ isShow: false, picture: "" })}
                ref={cancelButtonRef}
              >
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <img src={imageStatus.picture} alt="" />
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ImageView;
