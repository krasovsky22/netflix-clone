import React from 'react';

export type WithChildrenType = {
  children: React.ReactNode;
};

export type WithDisabled = {
  disabled: boolean;
};

export type ImageType = {
  src: string;
  alt?: string;
};

export type LinkType = {
  to: string;
};

export type FormMethodsType = 'POST' | 'GET';

export type FormType = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  method: FormMethodsType;
};

export type ClickableType = {
  onClick?: () => void;
};
