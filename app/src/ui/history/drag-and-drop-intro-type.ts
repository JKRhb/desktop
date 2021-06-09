/** Type of the drag and drop intro popover. Each value represents a feature. */
export enum DragAndDropIntroType {
  CherryPick = 'cherry-pick',
  Squash = 'squash',
  Reorder = 'reorder',
}

export const NumberOfDragAndDropIntros = Object.keys(DragAndDropIntroType)
  .length
