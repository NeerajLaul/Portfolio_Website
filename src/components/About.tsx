import { Github, Linkedin, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl mb-6">About</h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
            <p>
              Most of what I work on is centered around robotics problems involving perception, planning, and control, usually explored through simulation-based projects.
            </p>
            <p>
              Some of these projects touch on autonomy and manipulation, especially cases where planning or perception becomes less straightforward due to constraints or uncertainty. A lot of the time goes into testing different approaches, comparing tradeoffs, and understanding how design choices affect system behavior.
            </p>
            <p>
              Outside of robotics, I spend a lot of time writing code more broadly and making music. Working in both technical and creative domains has shaped how I think about structure, iteration, and problem-solving, and how ideas evolve as they’re built and refined.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:engineer@robotics.dev"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4">Skills & Tools</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">Programming</p>
              <p className="text-neutral-700 dark:text-neutral-300">Python, C++, MATLAB</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">Robotics Frameworks</p>
              <p className="text-neutral-700 dark:text-neutral-300">ROS2, Gazebo, RViz, MoveIt Planning</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">Computer Vision</p>
              <p className="text-neutral-700 dark:text-neutral-300">OpenCV, Camera Perception Pipelines, Depth Sensing, Object Detection</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">Reinforcement Learning</p>
              <p className="text-neutral-700 dark:text-neutral-300">Deep Q-Learning, CNNs, NEAT, PyTorch</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">Hardware</p>
              <p className="text-neutral-700 dark:text-neutral-300">Sensors and Actuation, Cameras, Motors, Grippers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}