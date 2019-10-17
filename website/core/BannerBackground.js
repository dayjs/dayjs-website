const React = require('react')

function BannerBackground() {
  return (
    <>
      <svg
        id="banner-clock"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: '100px',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <script src="//unpkg.com/d3" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              var svg = d3.select('#banner-clock')
              var banner = d3.select('.dayjs-home-banner')
              var rect = banner.node().getBoundingClientRect()

              var width = rect.width - rect.width * 0.1
              width = width > 768 ? width : 992
              var height = width
              svg.attr('width', width)
              svg.attr('height', height)

              var radius = Math.min(width, height) / 2,
                bodyRadius = radius / 24,
                dotRadius = bodyRadius - 8

              var pi = Math.PI

              var fields = [
                { radius: 0.2 * radius, interval: d3.timeYear },
                { radius: 0.3 * radius, interval: d3.timeMonth },
                { radius: 0.4 * radius, interval: d3.timeWeek },
                { radius: 0.6 * radius, interval: d3.timeDay },
                { radius: 0.7 * radius, interval: d3.timeHour },
                { radius: 0.8 * radius, interval: d3.timeMinute }
              ]

              var color = d3
                .scaleSequential()
                .domain([0, 360])
                .interpolator(d3.interpolateRainbow)

              var arcBody = d3
                .arc()
                .startAngle(function(d) {
                  return bodyRadius / d.radius
                })
                .endAngle(function(d) {
                  return -pi - bodyRadius / d.radius
                })
                .innerRadius(function(d) {
                  return d.radius - bodyRadius
                })
                .outerRadius(function(d) {
                  return d.radius + bodyRadius
                })
                .cornerRadius(bodyRadius)

              var g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

              var paths = g
                .append('g')
                .attr('class', 'paths')
                .selectAll('g')
                .data(fields)
                .enter()
                .append('g')

              paths.append('path').attr('d', function(d) {
                return (
                  arcBody(d) +
                  'M0,' +
                  (dotRadius - d.radius) +
                  'a' +
                  dotRadius +
                  ',' +
                  dotRadius +
                  ' 0 0,1 0,' +
                  -dotRadius * 2 +
                  'a' +
                  dotRadius +
                  ',' +
                  dotRadius +
                  ' 0 0,1 0,' +
                  dotRadius * 2
                )
              })

              tick()

              d3.timer(tick)

              function tick() {
                var now = Date.now()

                fields.forEach(function(d) {
                  var start = d.interval(now)
                  var end = d.interval.offset(start, 1)

                  d.angle = Math.round(((now - start) / (end - start)) * 360 * 100) / 100
                })

                paths
                  .style('fill', function(d) {
                    return color(d.angle)
                  })
                  .attr('transform', function(d) {
                    return 'rotate(' + d.angle + ')'
                  })
              }
            `
        }}
      />
    </>
  )
}

module.exports = BannerBackground
