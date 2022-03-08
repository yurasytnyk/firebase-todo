import { 
  FC, 
  useState,
} from 'react';
import { 
  FormikHelpers, 
  useFormik, 
} from 'formik';
import { 
  doc, 
  updateDoc, 
  arrayUnion, 
} from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';

import { 
  IFormValue,
  Props, 
} from '../types/add-task-form-types';
import AddTaskIconSvg from '../../../assets/img/add.svg';
import { AddTaskButton } from '../../add-task-button/component';
import { AddButton } from '../../add-button/component';
import { CancelButton } from '../../cancel-button/component';
import { FirebaseClient } from '../../../firestore/firebase-client/firebase-client';
import { useAppSelector } from '../../../store/hooks/use-app-selector/use-app-selector';
import '../styles/add-task-form-styles.scss';

export const AddTaskForm: FC<Props> = (props) => {
  const { id } = props;

  const [visible, setVisible] = useState(false);
  
  const userId = useAppSelector((state) => state.auth.isAuth.uuid);

  const classes = clsx(
    'task-form',
    visible && 'visible',
  );

  const onClickHandler = () => {
    setVisible(!visible);
  };

  const addNewTask = async (values: IFormValue) => {
    await updateDoc(doc(FirebaseClient.db, 'users', `${userId}`, 'lists', `${id}`), {
      tasks: arrayUnion({
        id: uuid(),
        title: values.task,
        completed: false,
      }),
    });
  };

  const onSubmitHandler = async (
    values: IFormValue,
    actions: FormikHelpers<IFormValue>
  ) => { 
    await addNewTask(values);

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      task: '',
    },
    onSubmit: onSubmitHandler,
  });
  
  return (
    <>
      <form
        className={classes}
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <input
          className="task-form__input"
          type="text" 
          placeholder="Task description"
          {...formik.getFieldProps('task')}
        />

        <AddButton 
          text="Add Task" 
          fullWidth={false}
        />
        
        <CancelButton 
          text="Cancel" 
          onClickHandler={onClickHandler}
        />
      </form>

      <AddTaskButton
        icon={AddTaskIconSvg}
        text="Add Task"
        asideSide={false}
        onClickHandler={onClickHandler}
        isVisible={visible}
      />
    </>
  );
};
