import React, { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import StatBox from "../stat-box/StatBox";
import styles from "./DraggableStats.module.scss";

type StatTypes = {
  name: string;
  value: string;
};

type DraggableStatsProps = {
  selectedStats: StatTypes[];
  setSelectedStats: React.Dispatch<React.SetStateAction<StatTypes[]>>;
};

const DraggableStats: React.FC<DraggableStatsProps> = ({
  selectedStats,
  setSelectedStats,
}) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = selectedStats.findIndex((s) => s.name === active.id);
    const newIndex = selectedStats.findIndex((s) => s.name === over.id);

    setSelectedStats((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  return (
    <div className={styles.draggableContainer}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={selectedStats.map((s) => s.name)}
          strategy={verticalListSortingStrategy}
        >
          {selectedStats.map((stat) => (
            <SortableStatBox key={stat.name} stat={stat} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DraggableStats;

const SortableStatBox: React.FC<{ stat: StatTypes }> = ({ stat }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: stat.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "pointer",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <StatBox stat={stat} dragHandleProps={listeners} />
    </div>
  );
};