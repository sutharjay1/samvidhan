
// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";



// export const useOnboarding = create<OnboardingState>()(
//     persist(
//         (set) => ({
//             onboarding: {
//                 whyLearn: "",
//                 proficiency: EProficiency.BEGINNER,
//                 dailyGoal: {
//                     time: DailyGoalTime.FIVE_MIN_DAY,
//                     title: EDailyGoalTitles.CASUAL,
//                 },
//             },
//             setOnboarding: (onboarding) => set({
//                 onboarding: {
//                     dailyGoal: onboarding.dailyGoal,
//                     whyLearn: onboarding.whyLearn,
//                     proficiency: onboarding.proficiency,
//                 },
//             }),
//         }),
//         {
//             name: "onboarding",
//             storage: createJSONStorage(() => localStorage),
//         }
//     )
// );