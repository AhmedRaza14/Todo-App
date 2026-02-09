import React from 'react';
import { format } from 'date-fns';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  category?: string;
  createdAt: string;
  scheduled_time?: string;
}

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onClick?: (task: Task) => void;
}

// Function to get color based on category
const getCategoryColor = (category?: string) => {
  if (!category) return 'bg-gray-500/30';

  const categoryColors: Record<string, string> = {
    'Work': 'bg-green-500/30',
    'Personal': 'bg-purple-500/30',
    'Health': 'bg-blue-500/30',
    'Shopping': 'bg-yellow-500/30',
    'Finance': 'bg-red-500/30',
    'Education': 'bg-indigo-500/30',
    'Social': 'bg-pink-500/30',
    'Other': 'bg-gray-500/30',
  };

  return categoryColors[category] || 'bg-gray-500/30';
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onClick }) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      return format(new Date(dateString), 'MMM dd');
    } catch {
      return dateString;
    }
  };

  const formatTime = (dateString?: string) => {
    if (!dateString) return '';
    try {
      return format(new Date(dateString), 'h:mm a');
    } catch {
      return '';
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't trigger card click if clicking the toggle button
    if ((e.target as HTMLElement).closest('button')) return;
    onClick?.(task);
  };

  return (
    <div
      className={`p-4 rounded-lg border backdrop-blur-sm transition-all duration-200 cursor-pointer ${
        task.completed
          ? 'bg-white/5 border-white/20 opacity-70'
          : 'bg-white/5 border-white/10 hover:bg-white/10'
      }`}
      onClick={handleCardClick}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle(task.id);
          }}
          className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
            task.completed
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent'
              : 'border-white/30 hover:border-white/50'
          }`}
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <h3
            className={`font-medium truncate ${
              task.completed ? 'line-through text-gray-500' : 'text-white'
            }`}
          >
            {task.title}
          </h3>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            {task.category && (
              <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(task.category)}`}>
                {task.category}
              </span>
            )}

            {task.scheduled_time && (
              <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-300 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formatTime(task.scheduled_time)}
              </span>
            )}

            {task.dueDate && (
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                📅 {formatDate(task.dueDate)}
              </span>
            )}
          </div>
        </div>

        {/* Click indicator */}
        {!task.completed && (
          <div className="shrink-0 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;