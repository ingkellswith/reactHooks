import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) onConfirm();
    //window.confirm(message)는 바로 실행되면서 알림이 뜨는데 확인을 누르면 true반환 아니면 false반환
    else onCancel();
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("deleting the world");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>delete the world</button>
    </div>
  );
}
