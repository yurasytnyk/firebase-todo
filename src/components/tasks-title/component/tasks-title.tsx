import { 
  ChangeEvent,
  FC, 
  useState, 
} from 'react';

import { Props } from '../types/tasks-title-types';
import EditIconSvg from '../../../assets/img/edit.svg';
import '../styles/tasks-title-styles.scss';

export const TasksTitle: FC<Props> = (props) => {
  const { 
    title,
    color,
  } = props;

  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState(title);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickHandler = () => setIsDisabled(!isDisabled);

  return (
    <div>
      <input
        className="tasks__title"
        style={{ color: color }}
        disabled={isDisabled}
        value={value}
        onChange={onChangeHandler}
      />

      <span onClick={onClickHandler}>
        <img src={EditIconSvg} alt="edit icon" />
      </span>
    </div>
  );
};
