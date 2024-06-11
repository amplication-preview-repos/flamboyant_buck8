import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LikeWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
};
