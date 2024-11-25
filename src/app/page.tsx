import MainCards from "@/components/MainCards/MainCards";
import { fetchData } from "@/helpers/graphql";
import {
  homePageNews,
} from "@/queries/getPagePosts";

// bNnQaki8yFI+

const Home = async () => {
  const data = await fetchData(homePageNews);


  return (
    <div className="w-full md:w-1/2 lg:w-6/12 lg:px-4 lg:mt-4 p-0 bg-white mb-4">
      {/* <WebstoryCards data={WebstoryData}/> */}
      {Object.keys(data).map((key) => (
        <MainCards
          data={data[key]}
          key={key}
          categoryName={key.replace("0", "-")}
        />
      ))}
    </div>
  );
};

export default Home;
