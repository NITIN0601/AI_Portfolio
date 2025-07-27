import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window (placeholder for future implementation) */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-card border rounded-lg shadow-glow animate-scale-in">
          <div className="p-4 border-b flex items-center justify-between bg-gradient-primary rounded-t-lg">
            <h3 className="font-semibold text-primary-foreground">AI Portfolio Assistant</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/20 h-6 w-6 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 h-full flex items-center justify-center">
            <div className="text-center space-y-2">
              <MessageCircle className="w-12 h-12 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Chatbot integration coming soon!
              </p>
              <p className="text-xs text-muted-foreground">
                Ask me about projects, experience, or skills
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full shadow-glow hover:shadow-xl transition-all duration-300 bg-gradient-primary hover:scale-110"
        size="sm"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};

export default ChatbotWidget;