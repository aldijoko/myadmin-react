import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockGeographyData as data } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";
import { ResponsiveChoropleth } from "@nivo/geo";

const Choropleth = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.black[100],
            },
          },
          legend: {
            text: {
              fill: colors.black[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.black[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.black[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.black[100],
          },
        },
        tooltip: {
          container: {
            background: colors.gray[300],
            color: colors.greenAccent[900],
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 50 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={false}
      graticuleLineColor="#dddddd"
      borderWidth={1.5}
      borderColor="#ffffff"
      // Not uses
      // defs={[
      //   {
      //     id: "dots",
      //     type: "patternDots",
      //     background: "inherit",
      //     color: "#38bcb2",
      //     size: 4,
      //     padding: 1,
      //     stagger: true,
      //   },
      //   {
      //     id: "lines",
      //     type: "patternLines",
      //     background: "inherit",
      //     color: "#eed312",
      //     rotation: -45,
      //     lineWidth: 6,
      //     spacing: 10,
      //   },
      //   {
      //     id: "gradient",
      //     type: "linearGradient",
      //     colors: [
      //       {
      //         offset: 0,
      //         color: "#000",
      //       },
      //       {
      //         offset: 100,
      //         color: "inherit",
      //       },
      //     ],
      //   },
      // ]}
      // fill={[
      //   {
      //     match: {
      //       id: "CAN",
      //     },
      //     id: "dots",
      //   },
      //   {
      //     match: {
      //       id: "CHN",
      //     },
      //     id: "lines",
      //   },
      //   {
      //     match: {
      //       id: "ATA",
      //     },
      //     id: "gradient",
      //   },
      // ]}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.greenAccent[300],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: colors.greenAccent[100],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default Choropleth;
