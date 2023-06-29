import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ArrowButton({ onHandlePic, fAIcon, extraClass }) {
  return (
    <button className={`arrow-button ${extraClass}`} onClick={onHandlePic}>
      <FontAwesomeIcon icon={fAIcon} size="2xl" />
    </button>
  );
}
