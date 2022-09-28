import { Ref } from 'react';

export const clickOutSideElement = (
  contentRef: Ref<HTMLDivElement>,
  setIsShow: (isShow: boolean) => void,
) => {
  return (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (contentRef && 'current' in contentRef) {
      if (!contentRef.current) return;
      if (!contentRef.current.contains(e.target as HTMLElement))
        setIsShow(false);
    }
  };
};
