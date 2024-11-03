/**
 * ComponentのPropsを取得
 */
export type GetComponentProps<T> = T extends React.ComponentType<infer P> | React.Component<infer P> ? P : never;
