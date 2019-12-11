switch (getLineStyle(beginIndex, endIndex)) {
    case 0: {
        beginX = getPosX(beginIndex) + radius / 2;
        beginY = getPosY(beginIndex) - radius / 2;
        endX = getPosX(endIndex) - radius / 2;
        endY = getPosY(endIndex) - radius / 2;

        let reversed = levels[beginIndex] > levels[endIndex];
        return getCurve([beginX, beginY], [endX, endY], reversed);
    }
    case 1: {
        let x1 = getPosX(beginIndex);
        let y1 = getPosY(beginIndex);
        let x2 = getPosX(endIndex - 1);
        let y2 = getPosY(beginIndex);
        g.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke-width", lineWidth);
        beginX = x2 + radius / 2;
        beginY = y2 - radius / 2;
        endX = getPosX(endIndex) - radius / 2;
        endY = getPosY(endIndex) - radius / 2;

        let reversed = levels[beginIndex] > levels[endIndex];
        return getCurve([beginX, beginY], [endX, endY], reversed);
    }
    case 2: {
        let x1 = getPosX(beginIndex + 1);
        let y1 = getPosY(endIndex);
        let x2 = getPosX(endIndex);
        let y2 = getPosY(endIndex);
        g.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke-width", lineWidth);
        beginX = getPosX(beginIndex) + radius / 2;
        beginY = getPosY(beginIndex) - radius / 2;
        endX = getPosX(beginIndex + 1) - radius / 2;
        endY = getPosY(endIndex) - radius / 2;

        let reversed = levels[beginIndex] > levels[endIndex];
        return getCurve([beginX, beginY], [endX, endY], reversed);
    }