import { IColors } from "../../../components/add-popup/types/add-popup-types";

export interface IAddPopupContext {
  activeColor: IColors | {};
  onColorChangeHandler: (color: IColors) => void;
  visible: boolean;
  setVisible: (flag: boolean) => void;
}
