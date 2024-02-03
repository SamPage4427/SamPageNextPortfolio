import { achievementsList } from "../../utils/constants";
function AchievementSection() {
  return (
    <div className="py-8 px-8 xl:gap-16 sm:py-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-wrap md:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white md:text-4xl font-bold sm:text-base">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] md:text-base sm:text-sm">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AchievementSection;
