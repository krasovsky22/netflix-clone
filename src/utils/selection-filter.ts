import { NetflixContentType } from "@/types";
import { capitalize as _capitalize } from "lodash";

type SelectionFilterPropsType = {
  series: NetflixContentType[];
  films: NetflixContentType[];
};

type SelectionType = {
  title: string;
  data: NetflixContentType[];
};
type SelectionFilterReturnType = {
  series: SelectionType[];
  films: SelectionType[];
};

const seriesTypes = ["documentaries", "comedies", "children", "crime", "feel-good"];
const filmsTypes = ["drama", "thriller", "children", "suspense", "romance"];

const filterSeriesFunction = (type: string, moviesData: NetflixContentType[]): SelectionType => ({
  title: _capitalize(type),
  data: moviesData.filter((show) => show.genre === type),
});

export default function selectionFilter({
  series,
  films,
}: SelectionFilterPropsType): SelectionFilterReturnType {
  return {
    series: seriesTypes.map((seriesType) => filterSeriesFunction(seriesType, series)),
    films: filmsTypes.map((seriesType) => filterSeriesFunction(seriesType, films)),
  };
}
