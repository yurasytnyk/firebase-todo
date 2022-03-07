import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { Props } from '../types/todo-list-item-types';
import { ListItemLabel } from '../../list-item-label/component';
import { Badge } from '../../badge/component';
import { RemoveListIcon } from '../../remove-list-icon/component';
import { useAppDispatch } from '../../../store/hooks/use-dispatch/use-dispatch';
import { deleteListRoutine } from '../../../store/features/todo-sidebar/routines/tasks-list-routine';
import '../styles/todo-list-item-styles.scss';
import { TodoListCount } from '../../todo-list-count/component';

export const TodoListItem: FC<Props> = (props) => {
  const {
    id,
    color,
    label,
    active,
    tasks,
  } = props;
  const classes = clsx(
    'todo__list-link',
    active && 'active',
  );

  const dispatch = useAppDispatch();

  const onClickHandler = (id: string) => {
    dispatch(deleteListRoutine(id));
  };

  return (
    <>
      {id && (
        <li className="todo__list-item">
          <NavLink to={id} className={classes}>
            <div className="todo__list-icon">
              {color?.name ? <Badge color={color.name} /> : null}
            </div>

            <ListItemLabel label={label} />
            
            <TodoListCount tasks={tasks} />

            <RemoveListIcon 
              listId={id}
              onClickHandler={onClickHandler}
            />
          </NavLink>

        </li>
      )}
    </>
  );
};
