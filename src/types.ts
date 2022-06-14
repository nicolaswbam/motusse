export type Tuple<
  Type,
  Length extends number,
  Intermediate extends Type[] = []
> = Intermediate['length'] extends Length
  ? Intermediate
  : Tuple<Type, Length, [Type, ...Intermediate]>;
