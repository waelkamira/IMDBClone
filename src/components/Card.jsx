import Image from "next/image";
import Link from "next/link";
import { FaRegThumbsUp } from "react-icons/fa";

export default function Card({ result }) {
  return (
    <div
      className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400
    sm:m-2 transition-shadow duration-200 group"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          style={{ maxWidth: "100%", maxHeight: "auto" }}
          className="sm:rounded-y-lg group-hover:opacity-80 transition-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Image IS Not Available"
        ></Image>
        <div className="p-2 ">
          <p className="line-clamp-2 text-md ">{result.overview}</p>
          <h2 className="truncate text-lg font-bold ">
            {result.title || result.name}
          </h2>
          <p className="flex">
            {result.release_date || result.first_air_date}{" "}
            <FaRegThumbsUp className="h-5 mr-1 ml-3 " /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
