import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import "../index.css";

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-black text-white font-sans">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold">Hi, I'm <span className="text-purple-400">CRG</span></h1>
        <p className="text-lg mt-4">Data Engineer | Azure | Databricks | PySpark | SQL</p>
      </header>

      <section className="w-full h-[400px]">
        <Canvas camera={{ position: [2, 2, 4] }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} />
          <mesh rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="purple" wireframe />
          </mesh>
        </Canvas>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I specialize in building scalable, high-performance data platforms on the Azure cloud with Spark and Databricks. With over 4 years of experience, I optimize ETL pipelines, implement governance, and handle terabytes of data daily.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-gray-900 rounded-2xl p-6 border border-purple-500"
          initial={{ rotateY: -90, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-2">Project: Sales Pipeline Optimizer</h3>
          <p>Built a high-performance ETL pipeline in Databricks processing 5TB+ data daily, reducing latency by 25%.</p>
        </motion.div>

        <motion.div
          className="bg-gray-900 rounded-2xl p-6 border border-purple-500"
          initial={{ rotateY: 90, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-2">Project: Real-Time Kafka Stream</h3>
          <p>Processed 5M+ events/day using Spark Streaming and Kafka with 99.9% delivery rate.</p>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white" />
          <textarea rows="4" placeholder="Your Message" className="p-3 rounded bg-gray-800 text-white"></textarea>
          <button className="bg-purple-500 px-6 py-2 rounded text-white font-semibold hover:bg-purple-600">
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center py-6 text-gray-500">
        Made with love by CRG | 2025
      </footer>
    </div>
  );
}
