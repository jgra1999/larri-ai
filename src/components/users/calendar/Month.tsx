import React from 'react'

type MonthProps = {
	month: string
	firstDay: string
}

export function Month({ month, firstDay }: MonthProps) {
	return (
		<div className='lg:w-[45%]'>
			<h5 className='font-medium text-gray-400 text-2xl text-center mb-4'>
				{month}
			</h5>
			<ol className='grid grid-cols-7 list-none shadow'>
				<li className='calendar__days md:hidden'>D</li>
				<li className='calendar__days md:hidden'>L</li>
				<li className='calendar__days md:hidden'>M</li>
				<li className='calendar__days md:hidden'>M</li>
				<li className='calendar__days md:hidden'>J</li>
				<li className='calendar__days md:hidden'>V</li>
				<li className='calendar__days md:hidden'>S</li>

				<li className='calendar__days hidden md:block'>Dom</li>
				<li className='calendar__days hidden md:block'>Lun</li>
				<li className='calendar__days hidden md:block'>Mar</li>
				<li className='calendar__days hidden md:block'>Mie</li>
				<li className='calendar__days hidden md:block'>Jue</li>
				<li className='calendar__days hidden md:block'>Vie</li>
				<li className='calendar__days hidden md:block'>Sab</li>

				<li className={`calendar__date ${firstDay}`}>
					<span>1</span>
				</li>
				<li className='calendar__date'>
					<span>2</span>
				</li>
				<li className='calendar__date'>
					<span>3</span>
				</li>
				<li className='calendar__date'>
					<span className='bg-blue-500 py-1 px-2 rounded-full text-white'>4</span>
				</li>
				<li className='calendar__date'>
					<span>5</span>
				</li>
				<li className='calendar__date'>
					<span>6</span>
				</li>
				<li className='calendar__date'>
					<span>7</span>
				</li>
				<li className='calendar__date'>
					<span>8</span>
				</li>
				<li className='calendar__date'>
					<span>9</span>
				</li>
				<li className='calendar__date'>
					<span>10</span>
				</li>
				<li className='calendar__date'>
					<span>11</span>
				</li>
				<li className='calendar__date'>
					<span>12</span>
				</li>
				<li className='calendar__date'>
					<span>13</span>
				</li>
				<li className='calendar__date'>
					<span>14</span>
				</li>
				<li className='calendar__date'>
					<span>15</span>
				</li>
				<li className='calendar__date'>
					<span>16</span>
				</li>
				<li className='calendar__date'>
					<span>17</span>
				</li>
				<li className='calendar__date'>
					<span>18</span>
				</li>
				<li className='calendar__date'>
					<span>19</span>
				</li>
				<li className='calendar__date'>
					<span>20</span>
				</li>
				<li className='calendar__date'>
					<span>21</span>
				</li>
				<li className='calendar__date'>
					<span>22</span>
				</li>
				<li className='calendar__date'>
					<span>23</span>
				</li>
				<li className='calendar__date'>
					<span>24</span>
				</li>
				<li className='calendar__date'>
					<span>25</span>
				</li>
				<li className='calendar__date'>
					<span>26</span>
				</li>
				<li className='calendar__date'>
					<span>27</span>
				</li>
				<li className='calendar__date'>
					<span>28</span>
				</li>
				<li className='calendar__date'>
					<span>29</span>
				</li>
				<li className='calendar__date'>
					<span>30</span>
				</li>
				<li className='calendar__date'>
					<span>31</span>
				</li>
			</ol>
		</div>
	)
}
