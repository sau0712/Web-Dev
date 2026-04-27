<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
<title>Student Result Report</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>

<body>

<h1>Student Result Report</h1>

<table>

<tr>
<th>Name</th>
<th>Roll No</th>
<th>Marks</th>
<th>Result</th>
</tr>

<xsl:for-each select="students/student">

<tr>

<td><xsl:value-of select="name"/></td>

<td><xsl:value-of select="roll"/></td>

<td><xsl:value-of select="marks"/></td>

<td>

<xsl:choose>

<xsl:when test="marks &gt;= 35">
<span class="pass">Pass</span>
</xsl:when>

<xsl:otherwise>
<span class="fail">Fail</span>
</xsl:otherwise>

</xsl:choose>

</td>

</tr>

</xsl:for-each>

</table>

</body>
</html>

</xsl:template>
</xsl:stylesheet>