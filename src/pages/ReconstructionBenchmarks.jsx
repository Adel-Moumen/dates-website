import React from 'react';
import { Link } from 'react-router-dom';

export default function ReconstructionBenchmarks() {
  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-primary text-center">Reconstruction Benchmarks</h2>

      {/* Metric Summary Table */}
      <div className="overflow-x-auto text-black bg-white p-4 rounded-xl shadow">
        <p className="text-lg font-semibold text-primary mb-2">Summary of Evaluation Metrics on Resynthesized Audio</p>
        {/* <table className="table-auto min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left">Metric</th>
              <th className="text-left">Functionality</th>
              <th className="text-left">Range</th>
              <th className="text-left">Speech</th>
              <th className="text-left">Music</th>
              <th className="text-left">Audio</th>
            </tr>
          </thead>
          <tbody>
          <tr>
      <td colSpan="11"><hr className="border-gray-400 my-1" /></td>
    </tr>
            <tr><td colSpan="6" className="font-semibold text-left bg-pink-100 py-1 text-center">Signal-level</td></tr>

            <tr><td>SDR</td><td>Signal-to-distortion Ratio</td><td>(-∞, ∞)</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>SI-SNR</td><td>Scale-invariant signal-to-noise ratio</td><td>(-∞, ∞)</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>PESQ</td><td>Perceptual Evaluation of Speech Quality</td><td>[1, 5]</td><td>✓</td><td></td><td></td></tr>
            <tr><td>UTMOS</td><td>UTokyo-SaruLab System for VoiceMOS 2022</td><td>[1, 5]</td><td>✓</td><td></td><td></td></tr>
            <tr><td>DNSMOS P808</td><td>DNSMOS Score of P.808</td><td>[1, 5]</td><td>✓</td><td></td><td></td></tr>
            <tr><td>DNSMOS P835</td><td>DNSMOS Score of P.835</td><td>[1, 5]</td><td>✓</td><td></td><td></td></tr>
            <tr><td>PLCMOS</td><td>Packet Loss Concealment MOS</td><td>[1, 5]</td><td>✓</td><td></td><td></td></tr>
            <tr><td>STOI</td><td>Short-Time Objective Intelligibility</td><td>[0, 1]</td><td>✓</td><td></td><td></td></tr>
            <tr><td>VISQOL</td><td>Virtual Speech Quality Objective Listener</td><td>[1, 5]</td><td></td><td>✓</td><td>✓</td></tr>
            <tr><td>SingMOS</td><td>Singing voice MOS</td><td>[1, 5]</td><td></td><td>✓</td><td>✓</td></tr>


            <tr><td colSpan="6" className="font-semibold text-left bg-blue-100 py-1 text-center">Application-level</td></tr>

            <tr><td>WER</td><td>Word Error Rate (beam=5)</td><td>[0, ∞)</td><td>✓</td><td></td><td></td></tr>
            <tr><td>Spk Sim</td><td>Speaker Similarity</td><td>[-1, 1]</td><td>✓</td><td></td><td></td></tr>
          </tbody>
        </table> */}
        <table className="table-auto min-w-full border border-gray-300 text-sm">
  <thead className="bg-gray-100">
    <tr>
      <th className="text-left px-2 py-1">Model / SR (kHz)</th>
      <th colSpan="2" className="text-left border-r px-2 py-1">SDR ↑</th>
      <th colSpan="2" className="text-left border-r px-2 py-1">SI-SNR ↑</th>
      <th colSpan="2" className="text-left border-r px-2 py-1">PESQ ↑</th>
      <th colSpan="2" className="text-left border-r px-2 py-1">UTMOS ↑</th>
      <th colSpan="2" className="text-left border-r px-2 py-1">DNSMOS P835 ↑</th>
      <th colSpan="2" className="text-left border-r px-2 py-1">WER ↓</th>
      <th colSpan="2" className="text-left px-2 py-1">Spk Sim ↑</th>
    </tr>
    <tr>
      {["16", "44.1", "16", "44.1", "16", "44.1", "16", "44.1", "16", "44.1", "16", "44.1", "16", "44.1"].map((sr, i) => {
        const isEndOfMetric = i % 2 === 1 && i < 12;
        return (
          <th key={i} className={`text-left px-2 py-1 ${isEndOfMetric ? "border-r" : ""}`}>{sr}</th>
        );
      })}
    </tr>
  </thead>
  <tbody>
    {[
      ["Ground truth", "-", "-", "-", "-", "-", "-", "4.09", "4.09", "3.18", "3.18", "2.83", "2.83", "-", "-"],
      ["RVQ-S", "4.08", "8.24", "1.15", "6.38", "2.59", "3.24", "3.35", "3.62", "3.16", "3.16", "2.04", "2.63", "0.67", "0.90"],
      ["RVQ-S+", "1.63", "8.40", "-1.77", "5.67", "2.22", "3.30", "3.12", "3.65", "3.12", "3.14", "2.12", "3.17", "0.69", "0.89"],
      ["RVQ-A", "0.59", "6.92", "-3.36", "4.27", "2.02", "2.86", "1.81", "3.15", "2.58", "3.06", "2.47", "2.92", "0.51", "0.73"],
      ["RVQ-M", "2.80", "6.74", "-0.68", "4.61", "2.00", "2.41", "1.64", "2.33", "2.64", "2.68", "3.20", "2.85", "0.44", "0.56"],
      ["RVQ-3", "2.46", "7.50", "-1.12", "4.63", "2.43", "3.06", "2.71", "3.33", "2.96", "3.08", "2.22", "2.66", "0.61", "0.87"],
      ["SVQ-S", "-4.90", "0.92", "-13.59", "-2.04", "1.43", "1.69", "2.19", "2.61", "3.09", "3.10", "13.16", "8.28", "0.35", "0.53"],
      ["SVQ-S+", "-4.45", "-0.64", "-11.74", "-3.64", "1.42", "1.63", "2.14", "2.40", "3.00", "3.07", "13.71", "7.89", "0.36", "0.52"],
      ["SVQ-A", "-11.80", "-5.04", "-33.46", "-9.56", "1.19", "1.18", "1.25", "1.26", "1.86", "1.97", "31.40", "34.68", "0.19", "0.14"],
      ["SVQ-M", "-5.19", "-4.70", "-11.17", "-7.89", "1.20", "1.14", "1.29", "1.24", "2.19", "1.56", "14.88", "33.87", "0.15", "0.11"],
      ["SVQ-3", "-5.90", "-3.09", "-15.13", "-7.12", "1.29", "1.79", "1.44", "2.57", "3.10", "3.01", "22.24", "6.71", "0.26", "0.49"],
      ["FSQ-S", "3.89", "4.58", "1.75", "2.47", "2.08", "2.10", "3.29", "3.06", "3.21", "3.12", "3.57", "4.02", "0.48", "0.66"],
      ["FSQ-A", "1.14", "1.00", "-1.89", "-1.58", "1.94", "1.74", "2.84", "2.41", "3.15", "2.97", "5.12", "7.59", "0.43", "0.39"],
      ["FSQ-M", "-1.08", "-2.09", "-4.39", "-4.61", "1.39", "1.22", "1.57", "1.26", "2.66", "2.04", "24.46", "20.26", "0.17", "0.16"],
      ["FSQ-3", "2.41", "1.29", "0.01", "-1.28", "1.97", "1.79", "3.06", "2.57", "3.20", "3.01", "4.35", "6.71", "0.44", "0.49"],
      ["K-means-S", "-18.21", "-", "-42.98", "-", "1.05", "-", "2.28", "-", "2.46", "-", "6.78", "-", "0.13", "-"]
    ].map((row, i) => (
      <tr key={i}>
        {row.map((val, j) => {
          const isMetricEnd = j % 2 === 1 && j < row.length - 2;
          const alignment = j === 0 ? "text-left" : "text-center";
          return (
            <td key={j} className={`border px-2 py-1 whitespace-nowrap ${alignment} ${isMetricEnd ? "border-r" : ""}`}>
              {val}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
</table>

      </div>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-4">
          <details className="border rounded-lg">
            <summary className="cursor-pointer p-4 bg-blue-100 text-blue-800 font-semibold text-lg">
              🗣️ Speech
            </summary>
            <div className="overflow-x-auto p-4 bg-white text-black">
              {/* <table className="table-auto min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-2 py-1">Tokenizer</th>
                    <th>#Q</th>
                    <th>kbps</th>
                    <th>Token Rate</th>
                    <th>SDR</th>
                    <th>SI-SNR</th>
                    <th>PESQ</th>
                    <th>UTMOS</th>
                    <th>DNSMOS P808</th>
                    <th>DNSMOS P835</th>
                    <th>PLCMOS</th>
                    <th>STOI</th>
                    <th>WER</th>
                    <th>Speaker Sim</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Enc-SMA-24</td>
                    <td>2</td>
                    <td>1.5</td>
                    <td>150</td>
                    <td>0.82</td>
                    <td>-1.53</td>
                    <td>1.56</td>
                    <td>1.58</td>
                    <td>3.21</td>
                    <td>2.39</td>
                    <td>3.44</td>
                    <td>0.85</td>
                    <td>5.44</td>
                    <td>0.42</td>
                  </tr>
                </tbody>
              </table> */}
              <table className="table-auto min-w-full border border-gray-300 text-sm">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-2 py-1">Tokenizer</th>
      <th className="px-2 py-1">#Q</th>
      <th className="px-2 py-1">kbps</th>
      <th className="px-2 py-1">Token rate</th>
      <th className="px-2 py-1">SDR ↑</th>
      <th className="px-2 py-1">SI-SNR ↑</th>
      <th className="px-2 py-1">PESQ ↑</th>
      <th className="px-2 py-1">UTMOS ↑</th>
      <th className="px-2 py-1">DNSMOS P808 ↑</th>
      <th className="px-2 py-1">DNSMOS P835 ↑</th>
      <th className="px-2 py-1">PLCMOS ↑</th>
      <th className="px-2 py-1">STOI ↑</th>
      <th className="px-2 py-1">WER ↓</th>
      <th className="px-2 py-1">Spk Sim ↑</th>
    </tr>
  </thead>
  <tbody>
    <tr className="font-semibold text-primary">
      <td>Ground truth</td>
      <td className="text-center">-</td>
      <td className="text-center">-</td>
      <td className="text-center">-</td>
      <td className="text-center"><u><b>290.16</b></u></td>
      <td className="text-center"><u><b>55.92</b></u></td>
      <td className="text-center"><u><b>4.64</b></u></td>
      <td className="text-center"><u><b>4.09</b></u></td>
      <td className="text-center"><u><b>3.84</b></u></td>
      <td className="text-center">3.18</td>
      <td className="text-center">4.16</td>
      <td className="text-center"><u><b>1.00</b></u></td>
      <td className="text-center">2.83</td>
      <td className="text-center"><u><b>1.00</b></u></td>
    </tr>
    <tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
    {/* Add remaining tokenizer rows here with similar formatting */}
    {/* Example: */}
    <tr>
      <td rowSpan="3">Enc-SMA-24</td>
      <td className="text-center">2</td>
      <td className="text-center">1.5</td>
      <td className="text-center">150</td>
      <td className="text-center">0.82</td>
      <td className="text-center">-1.53</td>
      <td className="text-center">1.56</td>
      <td className="text-center">1.58</td>
      <td className="text-center">3.21</td>
      <td className="text-center">2.39</td>
      <td className="text-center">3.44</td>
      <td className="text-center">0.85</td>
      <td className="text-center">5.44</td>
      <td className="text-center">0.42</td>
    </tr>
    <tr>
      <td className="text-center">8</td>
      <td className="text-center">6</td>
      <td className="text-center">600</td>
      <td className="text-center">6.50</td>
      <td className="text-center">4.83</td>
      <td className="text-center">2.77</td>
      <td className="text-center">3.09</td>
      <td className="text-center">3.57</td>
      <td className="text-center">2.96</td>
      <td className="text-center">4.08</td>
      <td className="text-center">0.94</td>
      <td className="text-center">2.78</td>
      <td className="text-center">0.72</td>
    </tr>
    <tr>
      <td className="text-center">32</td>
      <td className="text-center">24</td>
      <td className="text-center">2400</td>
      <td className="text-center"><b>9.75</b></td>
      <td className="text-center"><b>7.90</b></td>
      <td className="text-center"><u>3.71</u></td>
      <td className="text-center">3.74</td>
      <td className="text-center">3.74</td>
      <td className="text-center">3.19</td>
      <td className="text-center">4.29</td>
      <td className="text-center"><u>0.97</u></td>
      <td className="text-center">2.77</td>
      <td className="text-center">0.78</td>
    </tr>
    <tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
    <tr>
  <td rowSpan="3">DAC-SMA-24</td>
  <td className="text-center">2</td>
  <td className="text-center">1.5</td>
  <td className="text-center">150</td>
  <td className="text-center">-0.57</td>
  <td className="text-center">-8.40</td>
  <td className="text-center">1.48</td>
  <td className="text-center">1.68</td>
  <td className="text-center">3.24</td>
  <td className="text-center">2.61</td>
  <td className="text-center">3.27</td>
  <td className="text-center">0.83</td>
  <td className="text-center">9.59</td>
  <td className="text-center">0.45</td>
</tr>
<tr>
  <td className="text-center">8</td>
  <td className="text-center">6</td>
  <td className="text-center">600</td>
  <td className="text-center">1.79</td>
  <td className="text-center">-9.51</td>
  <td className="text-center">3.40</td>
  <td className="text-center">3.60</td>
  <td className="text-center">3.69</td>
  <td className="text-center">3.16</td>
  <td className="text-center">4.15</td>
  <td className="text-center">0.95</td>
  <td className="text-center">3.53</td>
  <td className="text-center">0.73</td>
</tr>
<tr>
  <td className="text-center">32</td>
  <td className="text-center">24</td>
  <td className="text-center">2400</td>
  <td className="text-center">2.20</td>
  <td className="text-center">-9.47</td>
  <td className="text-center"><b>4.45</b></td>
  <td className="text-center"><b>4.05</b></td>
  <td className="text-center">3.78</td>
  <td className="text-center">3.20</td>
  <td className="text-center"><b>4.40</b></td>
  <td className="text-center"><b>0.99</b></td>
  <td className="text-center">2.72</td>
  <td className="text-center">0.80</td>
</tr>
<tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td rowSpan="2">ST-S-16</td>
  <td className="text-center">2</td>
  <td className="text-center">1</td>
  <td className="text-center">100</td>
  <td className="text-center">-7.10</td>
  <td className="text-center">-14.46</td>
  <td className="text-center">1.21</td>
  <td className="text-center">2.32</td>
  <td className="text-center">3.37</td>
  <td className="text-center">2.78</td>
  <td className="text-center">2.96</td>
  <td className="text-center">0.77</td>
  <td className="text-center">4.20</td>
  <td className="text-center">0.35</td>
</tr>
<tr>
  <td className="text-center">8</td>
  <td className="text-center">4</td>
  <td className="text-center">400</td>
  <td className="text-center">3.01</td>
  <td className="text-center">0.53</td>
  <td className="text-center">2.62</td>
  <td className="text-center">3.84</td>
  <td className="text-center">3.77</td>
  <td className="text-center">3.17</td>
  <td className="text-center">4.00</td>
  <td className="text-center">0.92</td>
  <td className="text-center"><u>2.41</u></td>
  <td className="text-center"><u>0.86</u></td>
</tr>
<tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td rowSpan="2">Mimi-S-24</td>
  <td className="text-center">8</td>
  <td className="text-center">1.1</td>
  <td className="text-center">100</td>
  <td className="text-center">3.43</td>
  <td className="text-center">1.19</td>
  <td className="text-center">2.22</td>
  <td className="text-center">3.60</td>
  <td className="text-center">3.68</td>
  <td className="text-center">3.17</td>
  <td className="text-center">4.27</td>
  <td className="text-center">0.90</td>
  <td className="text-center">3.72</td>
  <td className="text-center">0.70</td>
</tr>
<tr>
  <td className="text-center">32</td>
  <td className="text-center">4.4</td>
  <td className="text-center">400</td>
  <td className="text-center"><u>9.32</u></td>
  <td className="text-center"><u>7.45</u></td>
  <td className="text-center">3.38</td>
  <td className="text-center"><u>3.92</u></td>
  <td className="text-center">3.74</td>
  <td className="text-center">3.18</td>
  <td className="text-center"><b>4.40</b></td>
  <td className="text-center">0.96</td>
  <td className="text-center">2.96</td>
  <td className="text-center">0.85</td>
</tr>
<tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td rowSpan="2">DWavL-S-16</td>
  <td className="text-center">2</td>
  <td className="text-center">1</td>
  <td className="text-center">100</td>
  <td className="text-center">-13.96</td>
  <td className="text-center">-37.23</td>
  <td className="text-center">1.13</td>
  <td className="text-center">3.32</td>
  <td className="text-center">3.68</td>
  <td className="text-center">3.13</td>
  <td className="text-center">3.86</td>
  <td className="text-center">0.75</td>
  <td className="text-center">4.97</td>
  <td className="text-center">0.33</td>
</tr>
<tr>
  <td className="text-center">6</td>
  <td className="text-center">3</td>
  <td className="text-center">300</td>
  <td className="text-center">-12.69</td>
  <td className="text-center">-35.43</td>
  <td className="text-center">1.19</td>
  <td className="text-center">3.32</td>
  <td className="text-center">3.72</td>
  <td className="text-center">3.13</td>
  <td className="text-center">4.05</td>
  <td className="text-center">0.75</td>
  <td className="text-center">4.34</td>
  <td className="text-center">0.35</td>
</tr>
<tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td>SQ-SMA-16</td>
  <td className="text-center">4</td>
  <td className="text-center">3</td>
  <td className="text-center">200</td>
  <td className="text-center">1.91</td>
  <td className="text-center">-8.61</td>
  <td className="text-center">3.31</td>
  <td className="text-center">3.90</td>
  <td className="text-center"><b>3.83</b></td>
  <td className="text-center"><b>3.28</b></td>
  <td className="text-center">4.13</td>
  <td className="text-center">0.96</td>
  <td className="text-center"><b>2.37</b></td>
  <td className="text-center"><b>0.87</b></td>
</tr>
<tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
<tr>
  <td>WT-SMA-24</td>
  <td className="text-center">1</td>
  <td className="text-center">0.98</td>
  <td className="text-center">75</td>
  <td className="text-center">2.02</td>
  <td className="text-center">-0.79</td>
  <td className="text-center">1.88</td>
  <td className="text-center">3.77</td>
  <td className="text-center">3.76</td>
  <td className="text-center">3.18</td>
  <td className="text-center">4.41</td>
  <td className="text-center">0.87</td>
  <td className="text-center">8.10</td>
  <td className="text-center">0.60</td>
</tr>
<tr>
  <td>WT-S-24</td>
  <td className="text-center">1</td>
  <td className="text-center">0.52</td>
  <td className="text-center">40</td>
  <td className="text-center">0.17</td>
  <td className="text-center">-3.16</td>
  <td className="text-center">2.05</td>
  <td className="text-center">3.89</td>
  <td className="text-center"><u>3.82</u></td>
  <td className="text-center"><u>3.27</u></td>
  <td className="text-center"><u>4.38</u></td>
  <td className="text-center">0.89</td>
  <td className="text-center">8.91</td>
  <td className="text-center">0.61</td>
</tr>


    {/* Continue with other models: DAC-SMA-24, ST-S-16, etc. */}
  </tbody>
</table>
            </div>
          </details>

          <details className="border rounded-lg">
            <summary className="cursor-pointer p-4 bg-purple-100 text-purple-800 font-semibold text-lg">
            🔊 🎵 General Audio & Music
            </summary>
            <div className="overflow-x-auto p-4 bg-white text-black">
              {/* <table className="table-auto min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th>Tokenizer</th>
                    <th>#Q</th>
                    <th>kbps</th>
                    <th>Token Rate</th>
                    <th>SDR</th>
                    <th>CI-SDR</th>
                    <th>SI-SNR</th>
                    <th>VISQOL</th>
                    <th>Singing MOS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Enc-SMA-24 (Audio)</td>
                    <td>2</td>
                    <td>1.5</td>
                    <td>150</td>
                    <td>-1.29</td>
                    <td>-1.28</td>
                    <td>-4.31</td>
                    <td>3.94</td>
                    <td>2.59</td>
                  </tr>
                  <tr>
                    <td>Enc-SMA-24 (Music)</td>
                    <td>2</td>
                    <td>1.5</td>
                    <td>150</td>
                    <td>2.16</td>
                    <td>2.13</td>
                    <td>0.46</td>
                    <td>4.05</td>
                    <td>2.67</td>
                  </tr>
                </tbody>
              </table> */}
              <table className="table-auto min-w-full border border-gray-300 text-sm">
  <thead className="bg-gray-100">
    <tr>
      <th rowSpan="2" className="px-2 py-1">Tokenizer</th>
      <th rowSpan="2" className="px-2 py-1">#Q</th>
      <th rowSpan="2" className="px-2 py-1">kbps</th>
      <th rowSpan="2" className="px-2 py-1">Token rate</th>
      <th colSpan="5" className="px-2 py-1 text-center">Audio</th>
      <th colSpan="5" className="px-2 py-1 text-center">Music</th>
    </tr>
    <tr>
      <th className="px-2 py-1">SDR ↑</th>
      <th className="px-2 py-1">CI-SDR ↑</th>
      <th className="px-2 py-1">SI-SNR ↑</th>
      <th className="px-2 py-1">VISQOL ↑</th>
      <th className="px-2 py-1">SingMOS ↑</th>
      <th className="px-2 py-1">SDR ↑</th>
      <th className="px-2 py-1">CI-SDR ↑</th>
      <th className="px-2 py-1">SI-SNR ↑</th>
      <th className="px-2 py-1">VISQOL ↑</th>
      <th className="px-2 py-1">SingMOS ↑</th>
    </tr>
  </thead>
  <tbody>
    <tr className="font-semibold text-primary">
      <td>Ground truth</td>
      <td className="text-center">-</td>
      <td className="text-center">-</td>
      <td className="text-center">-</td>
      <td className="text-center"><u><b>252.75</b></u></td>
      <td className="text-center"><u><b>84.90</b></u></td>
      <td className="text-center"><u><b>57.96</b></u></td>
      <td className="text-center"><u><b>4.73</b></u></td>
      <td className="text-center"><u><b>2.70</b></u></td>
      <td className="text-center"><u><b>254.24</b></u></td>
      <td className="text-center"><u><b>87.26</b></u></td>
      <td className="text-center"><u><b>60.26</b></u></td>
      <td className="text-center"><u><b>4.73</b></u></td>
      <td className="text-center"><u><b>2.79</b></u></td>
    </tr>
    <tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
    {/* Enc-SMA-24 */}
    <tr>
      <td rowSpan="3">Enc-SMA-24</td>
      <td className="text-center">2</td>
      <td className="text-center">1.5</td>
      <td className="text-center">150</td>
      <td className="text-center">-1.29</td>
      <td className="text-center">-1.28</td>
      <td className="text-center">-4.31</td>
      <td className="text-center">3.94</td>
      <td className="text-center">2.59</td>
      <td className="text-center">2.16</td>
      <td className="text-center">2.13</td>
      <td className="text-center">0.46</td>
      <td className="text-center">4.05</td>
      <td className="text-center">2.67</td>
    </tr>

    <tr>
      <td className="text-center">8</td>
      <td className="text-center">6</td>
      <td className="text-center">600</td>
      <td className="text-center"><u>4.28</u></td>
      <td className="text-center"><u>4.10</u></td>
      <td className="text-center">2.33</td>
      <td className="text-center">4.25</td>
      <td className="text-center">2.60</td>
      <td className="text-center"><u>7.32</u></td>
      <td className="text-center"><u>7.17</u></td>
      <td className="text-center"><u>5.87</u></td>
      <td className="text-center">4.38</td>
      <td className="text-center">2.66</td>
    </tr>
    <tr>
      <td className="text-center">32</td>
      <td className="text-center">24</td>
      <td className="text-center">2400</td>
      <td className="text-center"><b>7.72</b></td>
      <td className="text-center"><b>7.33</b></td>
      <td className="text-center"><u>5.64</u></td>
      <td className="text-center"><u>4.36</u></td>
      <td className="text-center">2.60</td>
      <td className="text-center"><b>11.04</b></td>
      <td className="text-center"><b>10.75</b></td>
      <td className="text-center"><b>9.19</b></td>
      <td className="text-center"><u>4.50</u></td>
      <td className="text-center">2.66</td>
    </tr>
    <tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
    {/* DAC-SMA-24 */}
    <tr>
      <td rowSpan="3">DAC-SMA-24</td>
      <td className="text-center">2</td>
      <td className="text-center">1.5</td>
      <td className="text-center">150</td>
      <td className="text-center">-2.60</td>
      <td className="text-center">-2.55</td>
      <td className="text-center">-11.55</td>
      <td className="text-center">3.99</td>
      <td className="text-center">2.59</td>
      <td className="text-center">1.75</td>
      <td className="text-center">1.71</td>
      <td className="text-center">-2.21</td>
      <td className="text-center">3.94</td>
      <td className="text-center"><b>2.70</b></td>
    </tr>
    <tr>
      <td className="text-center">8</td>
      <td className="text-center">6</td>
      <td className="text-center">600</td>
      <td className="text-center">1.35</td>
      <td className="text-center">1.22</td>
      <td className="text-center">-10.28</td>
      <td className="text-center">4.35</td>
      <td className="text-center"><u>2.61</u></td>
      <td className="text-center">4.82</td>
      <td className="text-center">4.67</td>
      <td className="text-center">-1.25</td>
      <td className="text-center">4.30</td>
      <td className="text-center"><u>2.68</u></td>
    </tr>
    <tr>
      <td className="text-center">32</td>
      <td className="text-center">24</td>
      <td className="text-center">2400</td>
      <td className="text-center">2.45</td>
      <td className="text-center">2.22</td>
      <td className="text-center">-9.91</td>
      <td className="text-center"><b>4.59</b></td>
      <td className="text-center">2.60</td>
      <td className="text-center">5.56</td>
      <td className="text-center">5.37</td>
      <td className="text-center">-1.16</td>
      <td className="text-center"><b>4.56</b></td>
      <td className="text-center">2.66</td>
    </tr>
    <tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
    {/* SQ-SMA-16 */}
    <tr>
      <td>SQ-SMA-16</td>
      <td className="text-center">4</td>
      <td className="text-center">3</td>
      <td className="text-center">200</td>
      <td className="text-center">-2.33</td>
      <td className="text-center">-2.33</td>
      <td className="text-center">-10.50</td>
      <td className="text-center">4.32</td>
      <td className="text-center"><b>2.62</b></td>
      <td className="text-center">3.44</td>
      <td className="text-center">3.39</td>
      <td className="text-center">-0.38</td>
      <td className="text-center">4.34</td>
      <td className="text-center"><u>2.68</u></td>
    </tr>
    <tr>
      <td colSpan="14"><hr className="border-gray-400 my-1" /></td>
    </tr>
    {/* WT */}
    <tr>
      <td>WT-SMA-24</td>
      <td className="text-center">1</td>
      <td className="text-center">0.98</td>
      <td className="text-center">75</td>
      <td className="text-center">-4.55</td>
      <td className="text-center">-4.45</td>
      <td className="text-center"><b>9.78</b></td>
      <td className="text-center">3.96</td>
      <td className="text-center">2.56</td>
      <td className="text-center">-14.30</td>
      <td className="text-center">-14.28</td>
      <td className="text-center">-23.09</td>
      <td className="text-center">3.64</td>
      <td className="text-center">2.60</td>
    </tr>
    <tr>
      <td>WT-S-24</td>
      <td className="text-center">1</td>
      <td className="text-center">0.52</td>
      <td className="text-center">40</td>
      <td className="text-center">-11.00</td>
      <td className="text-center">-10.85</td>
      <td className="text-center">-20.91</td>
      <td className="text-center">3.85</td>
      <td className="text-center">2.53</td>
      <td className="text-center">-19.91</td>
      <td className="text-center">-19.89</td>
      <td className="text-center">-45.55</td>
      <td className="text-center">3.33</td>
      <td className="text-center">2.42</td>
    </tr>
  </tbody>
</table>
            </div>
          </details>
        </div>

        <div className="text-center space-y-4">
          <Link
            to="/benchmarks"
            className="inline-block mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
          >
            ⬅️ Back to Benchmark Overview
          </Link>

          <div className="text-base text-white-700 dark:text-white-900 max-w-3xl mx-auto">
            <span className="text-xl mr-2">💡</span>
            Overall, these results underscore the importance of evaluating audio tokenizers beyond traditional waveform fidelity measures. Models optimized for perceptual or downstream tasks may exhibit low signal reconstruction performance, yet still produce subjectively high-quality audio reconstructions.          </div>
        </div>
      </div>
    </div>
  );
}



