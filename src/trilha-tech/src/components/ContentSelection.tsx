import { useParams, Link } from "react-router-dom";
import { coursesDatabase, ContentProps, CourseTyoe, LevelType } from "../data/database";
import { useEffect, useState } from "react";
import { getCourseContentTitle } from "../utils/getCourseContentTitle";

export function ContentSelection() {
  type Content = {
    level: LevelType;
    course: CourseTyoe;
  };
  const { level, course } = useParams<NonNullable<Content>>();
  const [contents, setContents] = useState<ContentProps[] | string>([]);
  const [modalController, setModalController] = useState<boolean>(false);

  useEffect(() => {
    if (level && course) {
      setContents(coursesDatabase[course][level]);
    }
  }, []);

  function getVideoThumbnail(videoUrl: string) {
    const id = videoUrl.substring(videoUrl.length - 11);
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }

  return (
    <div className="px-16 flex flex-col gap-16">
      <h1 className="font-bold text-2xl">
        {
          course &&  level && getCourseContentTitle(course, level)
        }
      </h1>

      <div className="flex flex-wrap gap-12">
        {typeof contents !== "string" &&
          contents.map((content) => {
            return (
              <Link
                key={content.id}
                to={"/ContentSelection/:basic/Content/:123124234"}
                className="flex flex-col gap-2 bg-slate-700 p-4 rounded-md border-2 border-transparent hover:border-lime-400 hover:shadow-lg transition-all delay-75 ease-in-out"
              >
                <img
                  className="h-60 w-80 rounded-lg"
                  src={getVideoThumbnail(content.videoUrl)}
                  alt={content.title}
                />
                <div className="flex justify-between">
                  <h2 className="font-medium text-lg max-w-60 overflow-x-clip">
                    {content.title}
                  </h2>
                  <span className="font-medium text-lg">00:08:27</span>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
