@echo off
echo.
set "dist="&set "out="
::setlocal
::set /p dist=������Ҫ�����Ŀ¼(����ΪĬ��ֵdist):
::echo.
::set /p out=���������Ŀ¼��(����ΪĬ��ֵpack):
::echo.
echo ���ڶ�ָ��Ŀ¼���д���...
echo.
node build/node2build.js
::node build/node2build.js %dist% %out%
echo.
echo ����Ѿ����,�밴������˳�
endlocal
@Pause>nul