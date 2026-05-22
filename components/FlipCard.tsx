type FlipCardProps = {
  frontTitle: string;
  frontSubtitle?: string;
  backContent: React.ReactNode;
};

export default function FlipCard({
  frontTitle,
  frontSubtitle,
  backContent,
}: FlipCardProps) {
  return (
    <div className="group [perspective:1000px] animate-bounce-slow">

      <div className="relative h-[350px] w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT */}
        <div className="absolute inset-0 bg-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center shadow-2xl border border-purple-500 [backface-visibility:hidden]">

          <h2 className="text-3xl font-bold text-purple-400 text-center">
            {frontTitle}
          </h2>

          {frontSubtitle && (
            <p className="text-gray-400 mt-4 text-center">
              {frontSubtitle}
            </p>
          )}

        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-cyan-600 rounded-3xl p-6 shadow-2xl overflow-y-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">

          {backContent}

        </div>

      </div>

    </div>
  );
}