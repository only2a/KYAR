<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>Cписок исполнителей</h2>
 <table border="1px">
	 <tr bgcolor="#9acd32">
		 <th style="text-align:center">Исполнитель</th>
		 <th style="text-align:center">Прослушивания</th>
		 <th style="text-align:center">Лучшая песня</th>
		 <th style="text-align:center">Последний релиз</th>
	 </tr>
<xsl:for-each select="music/num">
	 <tr>
		 <td><xsl:value-of select="singer"/></td>
		 <td><xsl:value-of select="audition"/></td>
		 <td><xsl:value-of select="bestsong"/></td>
		 <td><xsl:value-of select="lastrel"/></td>
	 </tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>