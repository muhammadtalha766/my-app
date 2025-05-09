import { useState } from 'react';
import { Search, Mic, PenLine, Send, MessageSquare, Image, Video, Music, Edit, BookOpen, HelpCircle, FileCode, FileText, Award, Lightbulb, ChevronDown, ChevronRight, ChevronLeft, Sun, Moon, Share, Smartphone } from 'lucide-react';

export default function BotAI() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showMore, setShowMore] = useState(false);
  
  const recentChats = [
    "It is a long established fact th",
    "When an unknown printer too"
  ];
  
  const last7DaysChats = [
    "But also the leap into electron",
    "It was popularised in the 198C"
  ];
  
  const last30DaysChats = [
    "Contrary to popular belief, Lor",
    "Finibus Bonorum et Malorum\"",
    "Written in 45 BC. This book is",
    "The standard chunk of Lorem"
  ];
  
  // Added a style tag for global styles to fix scaling issues
  const globalStyles = `
    html, body {
      font-size: 14px;
    }
    @media (min-width: 1024px) {
      html, body {
        font-size: 16px;
      }
    }
  `;
  
  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Global styles */}
      <style>{globalStyles}</style>
      
      {/* Sidebar */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} ${sidebarCollapsed ? 'w-16' : 'w-52'} flex flex-col border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}>
        <div className="p-3 flex items-center">
          <div className="bg-blue-600 text-white p-1.5 rounded-full mr-2">
            <MessageSquare size={16} />
          </div>
          {!sidebarCollapsed && <span className="font-bold text-base">BotAI</span>}
        </div>
        
        <div className="px-2 py-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2 w-full flex items-center justify-center">
            {sidebarCollapsed ? <MessageSquare size={16} /> : (
              <>
                <MessageSquare size={16} className="mr-2" />
                <span className="text-sm">New Chat</span>
              </>
            )}
          </button>
        </div>
        
        <div className={`px-2 py-1 ${sidebarCollapsed ? 'items-center' : ''}`}>
          <div className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
            <Image size={16} className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            {!sidebarCollapsed && <span className="text-sm">AI Generator</span>}
          </div>
          <div className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
            <HelpCircle size={16} className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            {!sidebarCollapsed && <span className="text-sm">Explore BotAI</span>}
          </div>
        </div>
        
        {!sidebarCollapsed && (
          <>
            <div className="mt-2 px-2">
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Recent</div>
              {recentChats.map((chat, index) => (
                <div key={`recent-${index}`} className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                  <FileText size={14} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className="text-xs truncate">{chat}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-2 px-2">
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Last 7 Days</div>
              {last7DaysChats.map((chat, index) => (
                <div key={`7days-${index}`} className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                  <FileText size={14} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className="text-xs truncate">{chat}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-2 px-2">
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Last 30 Days</div>
              {last30DaysChats.map((chat, index) => (
                <div key={`30days-${index}`} className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                  <FileText size={14} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className="text-xs truncate">{chat}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-1 px-2">
              <div 
                className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                onClick={() => setShowMore(!showMore)}
              >
                <ChevronDown size={14} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'} ${showMore ? 'transform rotate-180' : ''}`} />
                <span className="text-xs">More</span>
              </div>
              {showMore && (
                <div className="ml-4 mt-1">
                  <div className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                    <FileText size={14} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className="text-xs truncate">Additional item 1</span>
                  </div>
                  <div className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                    <FileText size={14} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className="text-xs truncate">Additional item 2</span>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        
        <div className="mt-auto">
          <div className="px-2 py-1">
            <div className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
              <HelpCircle size={16} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              {!sidebarCollapsed && <span className="text-sm">Support</span>}
            </div>
            <div className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
              <MessageSquare size={16} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              {!sidebarCollapsed && <span className="text-sm">Custom Bots</span>}
            </div>
            <div className={`flex items-center p-1.5 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
              <Award size={16} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              {!sidebarCollapsed && <span className="text-sm">Settings</span>}
            </div>
          </div>
          
          <div className={`px-2 py-2 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg p-1.5 w-full flex items-center justify-center">
              {sidebarCollapsed ? <Smartphone size={16} /> : (
                <>
                  <Smartphone size={16} className="mr-1.5" />
                  <span className="text-xs">Get App</span>
                  <span className="ml-auto text-xs bg-blue-100 px-1 py-0.5 rounded text-xs">New</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-1.5 px-3 flex items-center justify-between`}>
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>
          
          <div className="flex items-center">
            <button className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} mr-1.5`} onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} mr-1.5`}>
              <Share size={16} className={darkMode ? 'text-gray-300' : ''} />
            </button>
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-3 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full mb-3">
              <MessageSquare size={20} />
            </div>
            <h1 className="text-xl font-bold mb-1">Hello, I'm BotAI</h1>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>How can I make things easier for you?</p>
          </div>
          
          <div className={`w-full max-w-xl relative rounded-lg shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} overflow-hidden`}>
            <div className="p-3 min-h-24">
              <textarea 
                className={`w-full h-full outline-none resize-none text-sm ${darkMode ? 'bg-gray-800 text-white placeholder-gray-400' : ''}`}
                placeholder="Message BotAI..."
              ></textarea>
            </div>
            
            <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-2 flex items-center justify-between`}>
              <div className="flex">
                <button className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <Search size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                </button>
                <button className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <Lightbulb size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                </button>
              </div>
              
              <div className="flex">
                <button className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <Mic size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                </button>
                <button className={`p-1.5 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <PenLine size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                </button>
                <button className="bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-xl mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { icon: Image, text: "Image Generator" },
              { icon: Video, text: "Video Generator" },
              { icon: Music, text: "Audio Generator" },
              { icon: Edit, text: "Photo Editor" },
              { icon: BookOpen, text: "Education Feedback" },
              { icon: MessageSquare, text: "Get Advice" },
              { icon: FileCode, text: "Code Generator" },
              { icon: PenLine, text: "Help me write" },
              { icon: FileText, text: "Summarize text" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center p-2 rounded-lg border cursor-pointer hover:shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
              >
                <item.icon size={16} className={`mr-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`text-xs ${darkMode ? 'text-gray-300' : ''}`}>{item.text}</span>
              </div>
            ))}
          </div>
        </main>
        
        <footer className={`py-2 px-3 text-center text-xs border-t ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'} mt-auto`}>
          Copyright ©2025 <span className="text-blue-600">BotAI</span>. All Rights Reserved
        </footer>
      </div>
    </div>
  );
}