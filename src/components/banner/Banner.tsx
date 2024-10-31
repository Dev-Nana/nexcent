import ImageBanner from "../../assets/images/image-banner.png"

export default function Banner() {
  return (
    <div className="flex flex-row w-full p-28 justify-center items-center">
      <div className="max-w-2xl text-start w-2/3">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Lessons and insights <span className="text-green-600">from 8 years</span>
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-sm">
          Where to grow your business as a photographer: site or social media?
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            className="rounded-sm bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-sm"
          >
            Register
          </a>
        </div>
      </div>
      <div className="opacity-0 sm:opacity-100 w-1/3">
        <img className='' src={ImageBanner} />
      </div>
    </div>
  );
}
