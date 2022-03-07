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
import { addDoc } from 'firebase/firestore';
import { listsCollection } from '../../../firestore/collections/lists-collection';
import { AddPopupColors } from '../../add-popup-colors/component';
import '../styles/add-popup-styles.scss';

export const AddPopup: FC = () => {
  const { 
    activeColor,
    visible,
  } = useContext(AddPopupContext);

  const onSubmitHandler = async (
    values: IAddPopupList, 
    actions: FormikHelpers<IAddPopupList>
  ) => {
    if ('id' in activeColor) {
      await addDoc(listsCollection, {
        name: values.list,
        active: false,
        colorId: activeColor.id,
        tasks: [],
      });
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
