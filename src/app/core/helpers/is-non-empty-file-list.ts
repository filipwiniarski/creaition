type NonEmptyFileList = [File, ...File[]];

export const isNonEmptyFileList = (
  inputElement: HTMLInputElement,
): inputElement is HTMLInputElement & {
  files: NonEmptyFileList;
} => !!inputElement.files && inputElement.files.length > 0;
