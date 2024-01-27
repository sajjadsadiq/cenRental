import Trending from "./../assets/icons/trending.svg";
import NewReleases from "./../assets/icons/newRelease.svg";
import CommingSoon from "./../assets/icons/commingSoon.svg";
import Favourite from "./../assets/icons/favourite.svg";
import WatchLater from "./../assets/icons/watchLater.svg";
import AsideCard from "./AsideCard";

export default function Aside() {
  return (
    <aside>
      <ul className="space-y-2">
        {/* Aside Card */}
        <AsideCard title={"Treding"} logo={Trending} />
        <AsideCard title={"New Releases"} logo={NewReleases} />
        <AsideCard title={"Comming Soon"} logo={CommingSoon} />
        <AsideCard title={"Favourite"} logo={Favourite} />
        <AsideCard title={"Watch Later"} logo={WatchLater} />
      </ul>
    </aside>
  );
}
