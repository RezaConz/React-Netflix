import React from "react";

interface InputProps {
  id: string;
  // onChange 是一个事件处理函数，通常用于处理输入框（如文本框、复选框等）的值变化事件
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className='relative'>
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        // block：将元素显示为块级元素，使其占据一行并且上下都有空白
        // rounded-md：设置元素的边框为中等圆角
        // w-full：将元素的宽度设置为父元素的100%
        className='
              block
              rounded-md
              px-6 pt-6 pb-1
              w-full
              text-md
              text-white
              bg-neutral-700
              appearance-none
              focus:outline-none
              focus:ring-0
              peer
            '
        placeholder=' '
      />
      {/*bg-neutral-700：设置元素的背景色为中等程度的中性色。*/}
      {/*appearance-none：移除表单元素的默认外观，这样可以自定义表单元素的外观。*/}
      {/*focus:outline-none：在元素获得焦点时移除默认的外边框样式。*/}
      {/*focus:ring-0：在元素获得焦点时移除默认的聚焦时的边框样式。*/}
      {/*peer：用于与兄弟元素关联，通常用于配合其他类名来实现一些特定的布局或效果。*/}

      {/*duration-150：设置元素的过渡（transition）持续时间为150毫秒，用于平滑过渡效果*/}
      {/*transform：启用 CSS 变换效果，允许对元素进行旋转、缩放、平移等变换。*/}
      {/*-translate-y-3：在 Y 轴方向上将元素向上平移3个单位距离。*/}
      {/*-translate-y-3：在 Y 轴方向上将元素向上平移3个单位距离。*/}
      {/*top-4：设置元素距离其最近的定位祖先元素顶部的距离为4个单位。*/}
      {/*z-10：设置元素的堆叠顺序为10，决定了元素在层叠上下文中的显示顺序，数值越大越靠前显示。*/}
      {/*origin-[0]：设置元素变换的原点位置为左上角。*/}
      {/*left-6：设置元素距离其最近的定位祖先元素左侧的距离为6个单位。*/}
      {/*peer-placeholder-shown:scale-100：使用兄弟选择器，当占位符显示时，将标签的大小缩放到原来的100%。*/}
      {/*peer-placeholder-shown:translate-y-0：使用兄弟选择器，当占位符显示时，将标签在 Y 轴方向上的平移距离设为0，即不进行平移。*/}
      {/*peer-focus:scale-75：使用兄弟选择器，当输入框获得焦点时，将标签的大小缩放到原来的75%。*/}
      {/*peer-focus:-translate-y-3：使用兄弟选择器，当输入框获得焦点时，将标签在 Y 轴方向上的平移距离设置为-3，即向上平移3个单位距离。*/}
      <label
        className='
            absolute
            text-md
            text-zinc-400
            duration-150
            transform
            -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            '
        htmlFor={id}
      >
        {/*浏览器该标签与 id 为 "email" 的表单元素相关联*/}
        {label}
      </label>
    </div>
  );
};

export default Input;
