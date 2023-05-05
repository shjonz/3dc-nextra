import { Fragment } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: JSX.Element;
}

const SplitWithImage = () => {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="uppercase text-blue-400 font-semibold text-sm bg-blue-50 dark:bg-blue-900 p-2 self-start rounded-md">
            Our Story
          </p>
          <h1 className="text-3xl font-semibold">
            A digital Product design agency
          </h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="feature image"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SplitWithImage;
