import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Star } from 'lucide-react';

const Analytics = () => {
  const [data, setData] = useState({});

  // Generate random data for demonstration
  const generateRandomData = () => {
    const generateRevenueData = () => {
      return Array.from({ length: 7 }, (_, i) => ({
        day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
        revenue: Math.floor(Math.random() * 5000) + 2000,
        orders: Math.floor(Math.random() * 100) + 50,
        visitors: Math.floor(Math.random() * 1000) + 500
      }));
    };

    const generateTrafficData = () => {
      return Array.from({ length: 12 }, (_, i) => ({
        hour: `${i + 1}:00`,
        visitors: Math.floor(Math.random() * 300) + 100,
        pageViews: Math.floor(Math.random() * 500) + 200
      }));
    };

    const generateDeviceData = () => {
      const devices = ['Desktop', 'Mobile', 'Tablet'];
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];
      return devices.map((device, index) => ({
        name: device,
        value: Math.floor(Math.random() * 40) + 20,
        color: colors[index]
      }));
    };

    const generateReviews = () => {
      const reviews = [
        "Amazing quality and perfect fit for tall men!",
        "Best fashion brand I've discovered this year.",
        "Outstanding customer service and premium products.",
        "The tailoring is exceptional, highly recommend.",
        "Perfect sizing for tall gentlemen like myself.",
        "Elegant designs with superior craftsmanship."
      ];
      
      return Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        text: reviews[i],
        rating: Math.floor(Math.random() * 2) + 4,
        author: `Customer ${i + 1}`,
        time: `${Math.floor(Math.random() * 12) + 1}h ago`
      }));
    };

    return {
      revenueData: generateRevenueData(),
      trafficData: generateTrafficData(),
      deviceData: generateDeviceData(),
      reviews: generateReviews()
    };
  };

  // Calculate weekly analytics metrics
  const calculateMetrics = (revenueData) => {
    const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
    const totalOrders = revenueData.reduce((sum, item) => sum + item.orders, 0);
    const totalVisitors = revenueData.reduce((sum, item) => sum + item.visitors, 0);
    const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;

    return {
      totalRevenue: totalRevenue.toLocaleString(),
      avgOrderValue,
      totalVisitors: totalVisitors.toLocaleString()
    };
  };

  useEffect(() => {
    let animationFrameId;

    const updateData = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setData(generateRandomData());
      });
    };

    updateData();
    const interval = setInterval(updateData, 5000);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const ReviewCard = ({ review }) => (
    <div className="bg-white/60 backdrop-blur-sm rounded-md p-4 mb-3 border border-gray-200/50 hover:bg-white/80 transition-all duration-300 ease-out transform hover:-translate-y-1">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">{review.author[0]}</span>
          </div>
          <div>
            <p className="font-medium text-gray-700 text-sm">{review.author}</p>
            <p className="text-xs text-gray-400">{review.time}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-600 font-light leading-relaxed">{review.text}</p>
    </div>
  );

  if (!data.revenueData) return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-gray-500 font-light">Loading analytics...</div>
    </div>
  );

  const metrics = calculateMetrics(data.revenueData);

  return (
    <div className="min-h-screen mt-10 bg-gray-100 font-sans pt-20 px-4 max-w-7xl mx-auto">
      {/* Header with Logo and Title */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-thin text-gray-800 heightham-font">Heightham Analytics</h1>
        <p className="text-sm text-gray-500 mt-2">Premium Insights for Elevated Performance</p>
      </div>

      {/* Weekly Metrics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-md p-4 shadow-sm border border-gray-200/50 text-center">
          <h4 className="text-sm font-light text-gray-600">Total Weekly Revenue</h4>
          <p className="text-2xl font-medium text-gray-800">${metrics.totalRevenue}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-md p-4 shadow-sm border border-gray-200/50 text-center">
          <h4 className="text-sm font-light text-gray-600">Average Order Value</h4>
          <p className="text-2xl font-medium text-gray-800">${metrics.avgOrderValue}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-md p-4 shadow-sm border border-gray-200/50 text-center">
          <h4 className="text-sm font-light text-gray-600">Total Visitors</h4>
          <p className="text-2xl font-medium text-gray-800">{metrics.totalVisitors}</p>
        </div>
      </div>

      {/* Charts and Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-md p-4 shadow-sm border border-gray-200/50">
          <h3 className="text-lg font-light text-gray-800 mb-4">Weekly Revenue</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart 
              data={data.revenueData}
              isAnimationActive={true}
              animationDuration={800}
              animationEasing="ease-in-out"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fontWeight: 300 }} />
              <YAxis tick={{ fontSize: 12, fontWeight: 300 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 300
                }}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#FF6B6B" 
                fill="rgba(255, 107, 107, 0.2)"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Device Usage Pie Chart */}
        <div className="bg-white/80 backdrop-blur-sm rounded-md p-4 shadow-sm border border-gray-200/50">
          <h3 className="text-lg font-light text-gray-800 mb-4">Device Usage</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data.deviceData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
                animationDuration={800}
                animationEasing="ease-in-out"
              >
                {data.deviceData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 300
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-3 space-y-1">
            {data.deviceData?.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="font-light text-gray-600">{item.name}</span>
                </div>
                <span className="font-medium text-gray-700">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Traffic Chart */}
        <div className="bg-white/80 backdrop-blur-sm rounded-md p-4 shadow-sm border border-gray-200/50">
          <h3 className="text-lg font-light text-gray-800 mb-4">Today's Traffic</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart 
              data={data.trafficData}
              isAnimationActive={true}
              animationDuration={800}
              animationEasing="ease-in-out"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="hour" tick={{ fontSize: 12, fontWeight: 300 }} />
              <YAxis tick={{ fontSize: 12, fontWeight: 300 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 300
                }}
              />
              <Line 
                type="monotone" 
                dataKey="visitors" 
                stroke="#4ECDC4" 
                strokeWidth={2}
                dot={{ fill: '#4ECDC4', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Reviews */}
        <div className="bg-white/80 backdrop-blur-sm rounded-md p-4 shadow-sm border border-gray-200/50">
          <h3 className="text-lg font-light text-gray-800 mb-4">Recent Reviews</h3>
          <div className="max-h-64 overflow-y-auto custom-scrollbar">
            {data.reviews?.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400&display=swap');
        .heightham-font {
          font-family: 'Cinzel', serif;
          font-weight: 400;
          letter-spacing: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default Analytics;