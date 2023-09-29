.. _getting_started:

Getting started
***************

.. _install_wis3d:

Installing from wheel file
==========================

Install
-------

Run the following command to install Wis3D.

.. code-block:: bash

    pip install https://ootts.github.io/wis3d-2.0.0-py3-none-any.whl


Verify installation
------

Now, try importing Wis3D.

.. code-block:: bash

    python -c "from wis3d import Wis3D"

If this works, Wis3D has been successfully installed. Congratulations!


.. _running_examples:

Running examples
=================

(This section is under construction.)

Wis3D provides a complete set of testing data and a simple tutorial. See ``example`` for more details.

Run python example

.. code-block:: bash

    python example/test.py

Start the web service to get the visualization.

.. code-block:: bash

    wis3d --vis_dir example/visual --host 0.0.0.0 --port 19090

Open your browser, and enter http://localhost:19090 to see the results.

For more information about how to use Wis3D, please refer to :doc:`../tutorials/wis3d`.

