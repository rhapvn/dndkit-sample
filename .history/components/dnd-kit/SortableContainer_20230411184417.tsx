import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

type Task = {
  id: string;
  items: string[];
  label: string;
};

const SortableContainer = ({ id, items, label }: Task) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <div className='w-[calc(33%-5px)]'>
      <h3 className='text-xl font-bold text-center'>{label}</h3>
      <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
        <div
          ref={setNodeRef}
          className='w-full border-2 border-gray-500/75 p-5 mt-2 rounded-md'
        >
          {items.map((id: string) => (
            <SortableItem key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default SortableContainer;
