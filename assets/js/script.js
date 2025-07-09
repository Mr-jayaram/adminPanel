    document.addEventListener('DOMContentLoaded', function() {

        // --- SIDEBAR INTERACTIVITY (original logic) ---
        // The custom JS for submenu toggling has been REMOVED. Bootstrap handles it.
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('sidebar');

        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        document.addEventListener('click', (event) => {
            if (window.innerWidth <= 992 && sidebar.classList.contains('open') &&
                !sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
                sidebar.classList.remove('open');
            }
        });

        // --- APEXCHARTS, DARK MODE, FULLSCREEN, etc. (All Unchanged) ---
        var visitorsChartOptions = {
            series: [{
                name: "Visitors",
                type: "column",
                data: [800, 1400, 900, 1700, 1100, 1800, 1300, 1e3]
            }, {
                name: "Trend",
                type: "line",
                data: [700, 1300, 1e0, 1600, 1200, 1700, 1400, 1100]
            }],
            chart: {
                height: 250,
                type: "line",
                toolbar: {
                    show: !1
                }
            },
            stroke: {
                width: [0, 2],
                curve: "smooth",
                dashArray: [0, 5]
            },
            colors: ["var(--primary-color)", "var(--red-color)"],
            plotOptions: {
                bar: {
                    columnWidth: "40%",
                    borderRadius: 4
                }
            },
            dataLabels: {
                enabled: !1
            },
            xaxis: {
                categories: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
                labels: {
                    style: {
                        colors: "var(--text-light)",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "var(--text-light)",
                        fontSize: "12px"
                    }
                }
            },
            grid: {
                borderColor: "var(--border-color)",
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: !0
                    }
                },
                xaxis: {
                    lines: {
                        show: !1
                    }
                }
            },
            legend: {
                show: !1
            },
            tooltip: {
                theme: document.body.classList.contains('dark-mode') ? 'dark' : 'light',
                shared: !0,
                intersect: !1
            }
        };
        var visitorsChart = new ApexCharts(document.querySelector("#visitorsChart"), visitorsChartOptions);
        visitorsChart.render();
        const orderStatsData = {
            day: {
                series: [{
                    name: "Delivered",
                    data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                    name: "Pending",
                    data: [21, 30, 18, 41, 32, 59, 70]
                }, {
                    name: "Cancelled",
                    data: [11, 32, 45, 32, 34, 52, 41]
                }],
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            week: {
                series: [{
                    name: "Delivered",
                    data: [150, 200, 180, 250]
                }, {
                    name: "Pending",
                    data: [100, 140, 120, 180]
                }, {
                    name: "Cancelled",
                    data: [50, 80, 60, 90]
                }],
                categories: ["Week 1", "Week 2", "Week 3", "Week 4"]
            },
            month: {
                series: [{
                    name: "Delivered",
                    data: [800, 950, 700, 1100, 1000, 1300]
                }, {
                    name: "Pending",
                    data: [400, 500, 350, 600, 550, 700]
                }, {
                    name: "Cancelled",
                    data: [150, 200, 120, 220, 180, 250]
                }],
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
            },
            year: {
                series: [{
                    name: "Delivered",
                    data: [10000, 12000, 9000]
                }, {
                    name: "Pending",
                    data: [5000, 6000, 4000]
                }, {
                    name: "Cancelled",
                    data: [1500, 2000, 1000]
                }],
                categories: ["2022", "2023", "2024"]
            }
        };
        var orderStatisticsOptions = {
            series: orderStatsData.day.series,
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: !1
                },
                toolbar: {
                    show: !1
                }
            },
            colors: ["var(--primary-color)", "var(--blue-color)", "var(--orange-color)"],
            dataLabels: {
                enabled: !1
            },
            stroke: {
                width: [3, 3, 3],
                curve: "smooth",
                dashArray: [0, 5, 0]
            },
            legend: {
                position: "top",
                horizontalAlign: "left",
                markers: {
                    radius: 12
                },
                labels: {
                    colors: 'var(--text-dark)'
                }
            },
            xaxis: {
                categories: orderStatsData.day.categories,
                labels: {
                    style: {
                        colors: "var(--text-light)",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "var(--text-light)",
                        fontSize: "12px"
                    }
                }
            },
            grid: {
                borderColor: "var(--border-color)",
                strokeDashArray: 4
            },
            tooltip: {
                theme: document.body.classList.contains('dark-mode') ? 'dark' : 'light'
            }
        };
        var orderStatisticsChart = new ApexCharts(document.querySelector("#orderStatisticsChart"), orderStatisticsOptions);
        orderStatisticsChart.render();
        var topCategoriesOptions = {
            series: [1754, 1234, 878, 466],
            chart: {
                type: "donut",
                height: 250
            },
            labels: ["Electronics", "Accessories", "Home Appliances", "Beauty & Others"],
            colors: ["var(--purple-color)", "var(--orange-color)", "var(--green-color)", "var(--blue-color)"],
            plotOptions: {
                pie: {
                    donut: {
                        size: "75%",
                        labels: {
                            show: !0,
                            total: {
                                show: !0,
                                label: "Total Sales",
                                color: "var(--text-light)",
                                fontSize: "14px",
                                formatter: function(w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: !1
            },
            legend: {
                show: !1
            },
            tooltip: {
                theme: document.body.classList.contains('dark-mode') ? 'dark' : 'light'
            }
        };
        var topCategoriesChart = new ApexCharts(document.querySelector("#topCategoriesChart"), topCategoriesOptions);
        topCategoriesChart.render();
        document.querySelectorAll('#orderStatsTimeToggle button').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('#orderStatsTimeToggle button').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const mode = this.dataset.mode;
                if (orderStatsData[mode]) {
                    orderStatisticsChart.updateSeries(orderStatsData[mode].series);
                    orderStatisticsChart.updateOptions({
                        xaxis: {
                            categories: orderStatsData[mode].categories
                        }
                    });
                }
            });
        });
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
            visitorsChart.updateOptions({
                tooltip: {
                    theme: isDarkMode ? 'dark' : 'light'
                }
            });
            orderStatisticsChart.updateOptions({
                tooltip: {
                    theme: isDarkMode ? 'dark' : 'light'
                },
                legend: {
                    labels: {
                        colors: 'var(--text-dark)'
                    }
                }
            });
            topCategoriesChart.updateOptions({
                tooltip: {
                    theme: isDarkMode ? 'dark' : 'light'
                }
            });
        });
        const fullscreenToggle = document.getElementById('fullscreenToggle');
        fullscreenToggle.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        });
        document.querySelectorAll('#transactionFilter button').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('#transactionFilter button').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filterMode = this.dataset.filter;
                document.querySelectorAll('#transactionsTable tbody tr').forEach(row => {
                    const status = row.dataset.status;
                    row.style.display = (filterMode === 'all' || status === filterMode) ? '' : 'none';
                });
            });
        });
    });