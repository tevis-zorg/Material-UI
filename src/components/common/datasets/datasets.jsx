// Pie chart dataset
export const desktopOS = [
    {
      // id: 'Windo',
      label: 'Windows',
      value: 42.72,
    },
    {
      // id: 'Mac OS',
      label: "Mac OS",
      value: 26.62,
      color:'#333'
    },
    {
      // id: 'OS X',
      label: 'OS X',
      value: 16.38,
    },
    {
      // id: 'Linux',
      label: 'Linux',
      value: 3.83,
    },
    {
      // id: 'Chrome',
      label: 'Chrome OS',
      value: 2.42,
    },
    {
      // id: 'Other',
      label: 'Other',
      value: 4.65,
    },
  ];
  
export const mobileOS = [
    {
      label: 'Android',
      value: 58.5,
    },
    {
      label: 'iOS',
      value: 22.7,
    },
    {
      label: 'Other',
      value: 18.8,
    },
  ];
  
export const platforms = [
    {
      label: 'Mobile',
      value: 59.12,
    },
    {
      label: 'Desktop',
      value: 40.88,
    },
  ];


// Bar char dataset
export const seriesA = {
    data: [2, 3, 1, 4, 5],
    label: 'Series A',
};
export const seriesB = {
    data: [3, 1, 4, 2, 1],
    label: 'Series B',
};
export const seriesC = {
    data: [3, 2, 4, 5, 1],
    label: 'Series C',
};

const normalizing = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
    ...mobileOS.map((v) => ({
        ...v,
        label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
        value: normalizing(v.value, platforms[0].value),
    })),
    ...desktopOS.map((v) => ({
        ...v,
        label: v.label === 'Other' ? 'Ohter (Desktop)' : v.label,
        value: normalizing(v.value, platforms[1].value),
    })),
];

export const valueFormatter = (item) => `${item.value}%`;

export const barChartProps = {
  series: [
      {
          id: "sync",
          // data: desktopOS.map(item => item.value),
          data: mobileAndDesktopOS.map(item => item.value),
          highlightScope: {
              highlight: 'item',
              fade: 'global',
          },
          faded: {
              color: 'gray',
          }
      },
  ],

  xAxis : [
      {
          scaleType: 'band',
          // data: desktopOS.map(item => item.label),
          data: mobileAndDesktopOS.map(item => item.label)
      }
  ],
  height: 350,
  slotProps:  {
          legend: {
              hidden: true,
      },
  },
};

export const pieChartProps = {
  series : [
      {
          id: "sync",
          data: 
          // desktopOS.map(
          //     item => 
          //         (
          //             {
          //                 id: item.label,
          //                 label: item.label,
          //                 value: item.value,
          //             }
          //         )
          // ),
          mobileAndDesktopOS,
          // sync between fades are not working well.
          // try to sync it with the bar chart.
          highlightScope: {
              highlight: 'item', 
              fade: 'global',
          },
          faded: {
              innerRadius: 35,
              additionalRadius: -35,
              color: 'gray',
          }
      }
  ],
  height: 350,
  slotProps: {
      legend: {
          hidden: true,
      },
  },
};