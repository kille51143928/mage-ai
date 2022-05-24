import BaseIcon, {
  BaseIconProps, CircleStyle, EllipseStyle, PathStyle, RectStyle,
} from './BaseIcon';

function build(arrayOfPathProps, iconProps: {
  fill?: string;
  useStroke?: boolean;
  viewBox?: string;
} = {}) {
  return ({
    ...props
  }: BaseIconProps) => (
    <BaseIcon
      {...props}
      {...iconProps}
    >
      {arrayOfPathProps.map(({
        Style,
        ...pathProps
      }, idx) => Style ? (
        <Style
          useStroke={iconProps?.useStroke}
          {...props}
          {...pathProps}
          key={idx}
        />
      ) : (
        <PathStyle
          useStroke={iconProps?.useStroke}
          {...props}
          {...pathProps}
          key={idx}
        />
      ))}
    </BaseIcon>
  );
}

export const Add = build([{
  d: 'M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z',
}]);

export const AlertCircle = build([{
  d: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z',
  fillRule: 'evenodd',
  clipRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

export const ApplyAction = build([{
  d: 'M17.9907 6.06279C17.9889 6.05645 17.9858 6.05068 17.9835 6.04453C17.9783 6.03062 17.9727 6.01691 17.9651 6.00426C17.9611 5.99761 17.9561 5.99165 17.9515 5.98542C17.9435 5.97457 17.935 5.96415 17.9252 5.95475C17.9191 5.94893 17.9125 5.94367 17.9058 5.93849C17.9003 5.93422 17.8958 5.92896 17.8898 5.92516C17.8843 5.92161 17.8781 5.91988 17.8724 5.91682C17.8681 5.91452 17.8648 5.91104 17.8603 5.90898L12.1003 3.26172C12.0366 3.23242 11.9634 3.23242 11.8997 3.26172L6.13969 5.90898C6.13512 5.91109 6.13169 5.91467 6.12732 5.91703C6.1217 5.92001 6.11561 5.9217 6.11016 5.92516C6.10424 5.92896 6.09973 5.93422 6.09425 5.93849C6.08754 5.94367 6.08092 5.94893 6.07482 5.95475C6.06504 5.96415 6.05648 5.97457 6.04846 5.98542C6.04386 5.99165 6.03891 5.99761 6.03492 6.00426C6.02733 6.01691 6.02168 6.03062 6.01652 6.04453C6.01424 6.05068 6.01107 6.05645 6.00932 6.06279C6.00354 6.08353 6 6.1051 6 6.1273V7.80109C6 7.89508 6.05484 7.98039 6.14016 8.01941L8.87812 9.27042L6.13969 10.529C6.13523 10.531 6.13184 10.5346 6.12756 10.5369C6.12182 10.5399 6.11566 10.5416 6.11016 10.5452C6.10424 10.549 6.09973 10.5542 6.09425 10.5585C6.08754 10.5637 6.08092 10.5689 6.07482 10.5747C6.06504 10.5841 6.05648 10.5946 6.04846 10.6054C6.04386 10.6116 6.03891 10.6176 6.03492 10.6243C6.02733 10.6369 6.02168 10.6506 6.01652 10.6645C6.01424 10.6707 6.01107 10.6764 6.00932 10.6828C6.00354 10.7035 6 10.7251 6 10.7473V12.1811C6 12.2751 6.05484 12.3604 6.14016 12.3994L9.13998 13.7701L6.13969 15.149C6.13518 15.1511 6.13178 15.1546 6.12744 15.1569C6.12176 15.16 6.11561 15.1617 6.11016 15.1652C6.10424 15.169 6.09973 15.1742 6.09425 15.1785C6.08754 15.1837 6.08092 15.1889 6.07482 15.1947C6.06504 15.2041 6.05648 15.2146 6.04846 15.2254C6.04386 15.2316 6.03891 15.2376 6.03492 15.2443C6.02733 15.2569 6.02168 15.2706 6.01652 15.2845C6.01424 15.2907 6.01107 15.2964 6.00932 15.3028C6.00354 15.3235 6 15.3451 6 15.3673V16.8011C6 16.8951 6.05484 16.9804 6.14016 17.0194L11.9002 19.6512C11.932 19.6656 11.966 19.6729 12 19.6729C12.034 19.6729 12.068 19.6656 12.0998 19.6512L17.8598 17.0194C17.9452 16.9804 18 16.8951 18 16.8011V15.3673C18 15.3452 17.9965 15.3235 17.9907 15.3028C17.9889 15.2964 17.9858 15.2907 17.9835 15.2845C17.9783 15.2706 17.9727 15.2569 17.9651 15.2443C17.9611 15.2376 17.9561 15.2316 17.9515 15.2254C17.9435 15.2146 17.935 15.2041 17.9252 15.1947C17.9191 15.1889 17.9125 15.1837 17.9058 15.1785C17.9003 15.1742 17.8958 15.169 17.8898 15.1652C17.8843 15.1616 17.878 15.1598 17.8723 15.1567C17.868 15.1545 17.8647 15.151 17.8603 15.149L14.86 13.7701L17.8598 12.3994C17.9452 12.3604 18 12.2751 18 12.1811V10.7473C18 10.7252 17.9965 10.7035 17.9907 10.6828C17.9889 10.6764 17.9858 10.6707 17.9835 10.6645C17.9783 10.6506 17.9727 10.6369 17.9651 10.6243C17.9611 10.6176 17.9561 10.6116 17.9515 10.6054C17.9435 10.5946 17.935 10.5841 17.9252 10.5747C17.9191 10.5689 17.9125 10.5637 17.9058 10.5585C17.9003 10.5542 17.8958 10.549 17.8898 10.5452C17.8843 10.5416 17.878 10.5398 17.8722 10.5367C17.868 10.5344 17.8647 10.531 17.8603 10.529L15.1219 9.27042L17.8598 8.01941C17.9452 7.98039 18 7.89508 18 7.80109V6.1273C18 6.10523 17.9965 6.08353 17.9907 6.06279ZM12 17.735L6.81624 15.3664L9.71648 14.0335L11.9002 15.0312C11.932 15.0456 11.966 15.0529 12 15.0529C12.034 15.0529 12.068 15.0456 12.0998 15.0312L14.2835 14.0335L17.1838 15.3664L12 17.735ZM12.7194 12.7862L12.4311 12.918L12.143 13.0496L12 13.115L11.857 13.0496L11.5689 12.918L11.2806 12.7862L6.81624 10.7464L9.4546 9.53381L11.9002 10.6512C11.932 10.6656 11.966 10.6729 12 10.6729C12.034 10.6729 12.068 10.6656 12.0998 10.6512L14.5454 9.53381L17.1838 10.7464L12.7194 12.7862ZM12 3.74395L17.1838 6.12643L12.7194 8.16625L12.4311 8.29798L12.143 8.42964L12 8.49496L11.857 8.42964L11.5689 8.29798L11.2806 8.16625L6.81624 6.12643L12 3.74395Z',
}]);

export const ArrowDown = build([{
  d: 'M4.70096 9.75c.57735 1 2.02073 1 2.59808 0l2.59807-4.5C10.4745 4.25 9.75278 3 8.59808 3H3.40192c-1.1547 0-1.87638 1.25-1.29903 2.25l2.59807 4.5z',
}], {
  viewBox: '0 0 12 12',
});

export const ArrowRight = build([{
  d: 'M9.75 7.29904c1-.57735 1-2.02073 0-2.59808l-4.5-2.59807C4.25 1.52554 3 2.24722 3 3.40192v5.19616c0 1.1547 1.25 1.87642 2.25 1.29903l4.5-2.59807z',
}], {
  viewBox: '0 0 12 12',
});

export const Check = build([{
  d: 'M17.256 4.66058C17.5814 4.98602 17.5814 5.51366 17.256 5.83909L8.45396 14.6411C7.9658 15.1292 7.17435 15.1292 6.68619 14.6411L2.74408 10.699C2.41864 10.3735 2.41864 9.8459 2.74408 9.52046C3.06951 9.19503 3.59715 9.19503 3.92259 9.52046L7.57007 13.1679L16.0774 4.66058C16.4029 4.33514 16.9305 4.33514 17.256 4.66058Z',
  clipRule: 'evenodd',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 20 20',
});


export const Cursor = build([{
  d: 'M5.1141.6402c-.3759-.402-.92-.482-1.3622-.2924C3.3102.537 3 .978 3 1.5122v11.7305c0 .5149.2966.9505.7246 1.1466.445.204.9872.1281 1.376-.2608l1.5635-1.6178 1.0173 2.4761.0043.0097c.2549.5734.9699.951 1.6407.6567l1.3362-.5727.0092-.004c.6344-.282.8937-1.0248.6331-1.6319l-1.0832-2.6785h1.7861c1.0994 0 1.6406-1.366.8629-2.1508L5.1141.6402zM4.5 2.1602v10.4314l2.6797-2.7731 1.7896 4.3558c.6494.215.863-.3699.863-.3699L8.1188 9.5028l3.2926-.2367L4.5 2.1601z',
  clipRule: 'evenodd',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 16 16',
});

export const Copy = build([{
  d: 'M7.36865 4.00598C7.36865 3.4537 7.81637 3.00598 8.36865 3.00598H19.9942C20.5465 3.00598 20.9942 3.4537 20.9942 4.00598V15.6316C20.9942 16.1838 20.5465 16.6316 19.9942 16.6316H8.36865C7.81637 16.6316 7.36865 16.1838 7.36865 15.6316V4.00598ZM9.36865 14.6316V5.00598H18.9942V14.6316H9.36865Z',
  clipRule: 'evenodd',
  fillRule: 'evenodd',
}, {
  d: 'M5 8.58557C5 8.03329 4.55228 7.58557 4 7.58557C3.44772 7.58557 3 8.03329 3 8.58557V19.5C3 20.3284 3.67157 21 4.5 21H15.4144C15.9667 21 16.4144 20.5523 16.4144 20C16.4144 19.4477 15.9667 19 15.4144 19H5V8.58557Z',
}], {
  viewBox: '0 0 24 24',
});

// TODO: Column

export const Edit = build([{
  d: 'M16.7105 1.29767C15.2127 -0.203289 12.781 -0.203778 11.2826 1.29658L0.351257 12.2421C0.129776 12.4639 0.00537109 12.7645 0.00537109 13.0779V16.4971C0.00537109 17.3255 0.676944 17.9971 1.50537 17.9971H4.9244C5.23791 17.9971 5.53861 17.8726 5.76044 17.6511L16.7059 6.71982C18.204 5.22363 18.2061 2.7964 16.7105 1.29767ZM12.6978 2.70988C13.4147 1.99201 14.5781 1.99225 15.2948 2.7104C16.0104 3.42748 16.0094 4.58882 15.2926 5.30469L14.5306 6.06565L11.9368 3.47182L12.6978 2.70988ZM10.5235 4.88695L2.00537 13.4161V15.9971H4.58634L13.1155 7.47894L10.5235 4.88695Z',
  clipRule: 'evenodd',
  fillRule: 'evenodd',
}], {
  fill: 'none',
  viewBox: '0 0 18 18',
});

export const File = build([{
  d: 'M7.36865 4.00598C7.36865 3.4537 7.81637 3.00598 8.36865 3.00598H19.9942C20.5465 3.00598 20.9942 3.4537 20.9942 4.00598V15.6316C20.9942 16.1838 20.5465 16.6316 19.9942 16.6316H8.36865C7.81637 16.6316 7.36865 16.1838 7.36865 15.6316V4.00598ZM9.36865 14.6316V5.00598H18.9942V14.6316H9.36865Z',
  clipRule: 'evenodd',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

export const Graph = build([{
  d: 'M5 5C5 4.44772 4.55228 4 4 4C3.44772 4 3 4.44772 3 5V18.5C3 19.3284 3.67157 20 4.5 20H20C20.5523 20 21 19.5522 21 19C21 18.4477 20.5523 18 20 18H5V5Z',
}, {
  d: 'M20.7071 7.70711C21.0976 7.31658 21.0976 6.68342 20.7071 6.29289C20.3166 5.90237 19.6834 5.90237 19.2929 6.29289L15 10.5858L13.0607 8.64645C12.4749 8.06066 11.5251 8.06066 10.9393 8.64645L7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L12 10.4142L13.9393 12.3536C14.5251 12.9393 15.4749 12.9393 16.0607 12.3536L20.7071 7.70711Z',
}], {
  viewBox: '0 0 24 24',
});

// TODO: Pipeline

// TODO: PreviewOpen

// TODO: PreviewHidden

export const Remove = build([{
  d: 'M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.2929 17.2929C4.90238 17.6834 4.90238 18.3166 5.2929 18.7071C5.68342 19.0976 6.31659 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289Z',
}]);

// TODO: Improve this image to be slightly shorter on some ends.
export const Report = build([{
  d: 'M4 4.00464C3.44772 4.00464 3 4.45235 3 5.00464C3 5.55692 3.44772 6.00464 4 6.00464H20C20.5523 6.00464 21 5.55692 21 5.00464C21 4.45235 20.5523 4.00464 20 4.00464H4ZM3 12.0046C3 11.4524 3.44772 11.0046 4 11.0046H20C20.5523 11.0046 21 11.4524 21 12.0046C21 12.5569 20.5523 13.0046 20 13.0046H4C3.44772 13.0046 3 12.5569 3 12.0046ZM3 19.0046C3 18.4524 3.44772 18.0046 4 18.0046H20C20.5523 18.0046 21 18.4524 21 19.0046C21 19.5569 20.5523 20.0046 20 20.0046H4C3.44772 20.0046 3 19.5569 3 19.0046Z',
  fillRule: 'evenodd',
  clipRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

export const Sort = build([{
  d: 'M4 4.00464C3.44772 4.00464 3 4.45235 3 5.00464C3 5.55692 3.44772 6.00464 4 6.00464H20C20.5523 6.00464 21 5.55692 21 5.00464C21 4.45235 20.5523 4.00464 20 4.00464H4ZM3 12.0046C3 11.4524 3.44772 11.0046 4 11.0046H20C20.5523 11.0046 21 11.4524 21 12.0046C21 12.5569 20.5523 13.0046 20 13.0046H4C3.44772 13.0046 3 12.5569 3 12.0046ZM3 19.0046C3 18.4524 3.44772 18.0046 4 18.0046H20C20.5523 18.0046 21 18.4524 21 19.0046C21 19.5569 20.5523 20.0046 20 20.0046H4C3.44772 20.0046 3 19.5569 3 19.0046Z',
  fillRule: 'evenodd',
  clipRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

// TODO: View Code

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Add,
  AlertCircle,
  ApplyAction,
  ArrowDown,
  ArrowRight,
  Check,
  // Column,
  Copy,
  Cursor,
  Edit,
  File,
  Graph,
  // Pipeline,
  // PreviewOpen,
  // PreviewHidden,
  Remove,
  Report,
  Sort,
  // ViewCode,
};
