import { 
  FC, 
  useContext, 
} from 'react';
import { 
  FormikHelpers, 
  useFormik, 
} from 'formik';

import { IAddPopupList } from '../types/add-popup-types';
import { AddPopupContext } from '../../../contexts/add-popup-context/context/add-popup-context';
import { CloseButton } from '../../close-button/component';
import { AddButton } from '../../add-button/component';
import { AddPopupColors } from '../../add-popup-colors/component';
import { useAppSelector } from '../../../store/hooks/use-app-selector/use-app-selector';
import { useAppDispatch } from '../../../store/hooks/use-dispatch/use-dispatch';
import { addPopupRoutine } from '../../../store/features/add-popup/routines/add-popup-routine';
import '../styles/add-popup-styles.scss';

export const AddPopup: FC = () => {
  const { 
    activeColor,
    visible,
  } = useContext(AddPopupContext);

  const userId = useAppSelector((state) => state.auth.isAuth.uuid);
  const dispatch = useAppDispatch();

  const onSubmitHandler = async (
    values: IAddPopupList, 
    actions: FormikHelpers<IAddPopupList>
  ) => {
    if ('id' in activeColor) {
      dispatch(
        addPopupRoutine({ 
          userId, 
          data: {
            name: values.list,
            active: false,
            colorId: activeColor.id,
            tasks: [],
          }, 
        })
      );
    }

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      list: '',
    },
    onSubmit: onSubmitHandler,
  });

  return (
    <>
      {visible && (
        <form 
          className="add-popup"
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <CloseButton />
          
          <input 
            className="field"
            type="text"
            placeholder="Task name"
            {...formik.getFieldProps('list')}
          />

          <AddPopupColors />          

          <AddButton 
            text="Add new list"
            fullWidth={true}
          />
        </form>
      )}
    </>
  );
};
