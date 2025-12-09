import HomeClient from "./HomeClient";
import { getImagesFrom } from "./lib/getImages";

export default function Page() {
  const gatesFences = getImagesFrom("gates-fences");
  const railingsStairs = getImagesFrom("railings-stairs");
  const pergolasRoofs = getImagesFrom("pergolas-roofs");
  const shedsRooms = getImagesFrom("sheds-rooms");
  const reinforcement = getImagesFrom("reinforcement");
  const custom = getImagesFrom("custom");

  return (
    <HomeClient
      gatesFences={gatesFences}
      railingsStairs={railingsStairs}
      pergolasRoofs={pergolasRoofs}
      shedsRooms={shedsRooms}
      reinforcement={reinforcement}
      custom={custom}
    />
  );
}
