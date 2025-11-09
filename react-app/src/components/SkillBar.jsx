import React from 'react'

export default function SkillBar({ skill, level, color = '#a8eaff' }) {
  return (
    <div className="my-4 w-full max-w-[400px]">
      {/* スキル名とパーセンテージ */}
      <div className="flex justify-between mb-1 text-sm font-medium text-gray-500">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>

      {/* バー本体 */}
      <div className="w-full h-8 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${level}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  )
}
