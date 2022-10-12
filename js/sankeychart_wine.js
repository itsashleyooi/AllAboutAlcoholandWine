// initialize the echarts instance
var myChart = echarts.init(document.getElementById("sankey_chart"));
var option;

// Draw the chart

const data = {
    nodes: [
        { name: "Grapes" },
        { name: "Red Grapes" },
        { name: "White Grapes" },
        { name: "Red Wine" },
        { name: "White Wine" },
        { name: "Zinfandel" },
        { name: "Cabernet Sauvignon" },
        { name: "Syrah" },
        { name: "Merlot" },
        { name: "Pinot Noir" },
        { name: "Sweet Sherry" },
        { name: "Sangiovese" },

        { name: "Pinot Gris" },
        { name: "White Zinfandel" },
        { name: "Riesling" },
        { name: "Sparkling Wine" },
        { name: "Champagne" },
        { name: "Sauvignon Blanc" },
        { name: "Pinot Blanc" },
        { name: "Chardonnay" },

        { name: "Residual Sugar < 1%" },
        { name: "Sweet" },
        { name: "Dry White Wine" },
        { name: "Dry Red Wine" },
    ],
    
    links: [
        { source: "Grapes", target: "Red Grapes", value: 1 },
        { source: "Grapes", target: "White Grapes", value: 1 },
        { source: "Red Grapes", target: "Residual Sugar < 1%", value: 1 },
        { source: "Red Grapes", target: "Sweet", value: 1 },
        { source: "White Grapes", target: "Residual Sugar < 1%", value: 1,},
        { source: "White Grapes", target: "Sweet", value: 1 },
        { source: "Residual Sugar < 1%", target: "Dry Red Wine", value: 1,},
        { source: "Residual Sugar < 1%", target: "Dry White Wine", value: 1},
        { source: "Sweet", target: "Red Wine", value: 1 },
        { source: "Sweet", target: "White Wine", value: 1 },
        { source: "Dry Red Wine", target: "Sangiovese", value: 1 },
        { source: "Dry Red Wine", target: "Tempranillo", value: 1 },
        { source: "Dry Red Wine", target: "Cabernet Sauvignon", value: 1},
        { source: "Dry White Wine", target: "Pinot Blanc", value: 1 },
        { source: "Dry White Wine", target: "Riesling", value: 1 },
        { source: "Dry White Wine", target: "Sauvignon Blanc", value: 1 },
        { source: "Red Wine", target: "Zinfandel", value: 1 },
        { source: "Red Wine", target: "Syrah", value: 1 },
        { source: "Red Wine", target: "Merlot", value: 1 },
        { source: "Red Wine", target: "Pinot Noir", value: 1 },
        { source: "Red Wine", target: "Sweet Sherry", value: 1 },
        { source: "White Wine", target: "Pinot Gris", value: 1 },
        { source: "White Wine", target: "White Zinfandel", value: 1 },
        { source: "White Wine", target: "Sparkling Wine", value: 1 },
        { source: "White Wine", target: "Champagne", value: 1 },
        { source: "White Wine", target: "Chardonnay", value: 1 },
    ],
};

myChart.setOption(
    (option = {
        tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
        },
        textStyle: {
            color: "#fff",
            fontFamily: "sans-serif",
        },
        series: [
            {
                type: "sankey",
                data: data.nodes,
                links: data.links,
                emphasis: {
                    focus: "adjacency",
                },
                levels: [
                    {
                        depth: 0,
                        itemStyle: {
                            color: "#fbb4ae",
                        },
                        lineStyle: {
                            color: "source",
                            opacity: 0.6,
                        },
                    },
                    {
                        depth: 1,
                        itemStyle: {
                            color: "#b3cde3",
                        },
                        lineStyle: {
                            color: "source",
                            opacity: 0.6,
                        },
                    },
                    {
                        depth: 2,
                        itemStyle: {
                            color: "#dab6c5",
                        },
                        lineStyle: {
                            color: "source",
                            opacity: 0.6,
                        },
                    },
                    {
                        depth: 3,
                        itemStyle: {
                            color: "#f6cba0",
                        },
                        lineStyle: {
                            color: "source",
                            opacity: 0.6,
                        },
                    },
                    {
                        depth: 4,
                        itemStyle: {
                            color: "#be5504",
                        },
                        lineStyle: {
                            color: "source",
                            opacity: 0.6,
                        },
                    }
                ],
                lineStyle: {
                    curveness: 0.5,
                },
            },
        ],
    })
);

option && myChart.setOption(option);
