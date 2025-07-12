import React from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  ShoppingBag,
  Truck,
  Shield,
  Gift,
} from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => navigate("/home")}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-gray-700" />
            <h2
              className="text-lg font-extralight tracking-wide text-gray-900"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              Shopping Cart
            </h2>
          </div>
          <button
            onClick={() => navigate("/")}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Empty Cart Message */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-400">0</span>
            </div>
          </div>
          <h3
            className="text-2xl font-extralight text-gray-900"
            style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
          >
            Your cart is empty
          </h3>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <Truck className="w-4 h-4 text-gray-600" />
              </div>
              <p className="text-xs font-light text-gray-600">Free Shipping</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-4 h-4 text-gray-600" />
              </div>
              <p className="text-xs font-light text-gray-600">Secure Payment</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <Gift className="w-4 h-4 text-gray-600" />
              </div>
              <p className="text-xs font-light text-gray-600">Gift Wrapping</p>
            </div>
          </div>
          <div className="text-center">
            <p
              className="text-xs font-light text-gray-500 mb-2"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              Need assistance? Contact our style consultants
            </p>
            <button
              className="text-xs font-light text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors duration-200"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
